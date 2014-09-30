"use strict";

var Q = require('q/q');
var _ = require('lodash/dist/lodash.compat');
var Key = require('keymaster/keymaster');
var EventProxy = require('../../services/EventProxy');
var SandboxLauncher = require('../../services/SandboxLauncher');
var Practice = require('../../models/Practice');


var PracticeSandbox = Ractive.extend({
    el: '.b-practice',
    template: JST['templates/practice/sandbox'](),
    debug: true,

    init: function() {
        var practice = new Practice(this.data.practice);

        this.set('practice', practice);
        this._codeAreas = this.findAllComponents('Codearea', {live: true});
        this._tabs = this.findAllComponents('Tabs', {live: true});
        this._iframe = this.find('.b-sandbox-result');

        Key("shift+enter", this.exec.bind(this));
        EventProxy.on('sandboxExec', this.exec.bind(this));
        EventProxy.on('sandboxExecuted', this.showReport.bind(this));
        this.on('hideAlert', this.hideReport.bind(this));

        this.loadData().then(function(files) {
            var tabs = this.buildTabs(files);
            this.set('tabs', tabs);
        }.bind(this));
    },

    loadData: function() {
        var practice = this.data.practice;
        var deferred = Q.defer();
        var ractive = this;

        $.getJSON(practice.configPath(), function(config) {
            var promises = [],
                files = [];

            _.each(config.files, function(filename) {
                var file = {name: filename};
                var file_path = practice.filePath(filename);
                var deferred = Q.defer();
                var promise = deferred.promise;

                promises.push(promise);
                
                $.get(file_path, function(data) {
                    file.text = data;
                    files.push(file);
                    deferred.resolve();
                });
            });

            Q.all(promises).then(function() {
                deferred.resolve(files);
            });
        });

        return deferred.promise;
    },

    buildTabs: function(files) {
        return files.map(function(file) {
            var ext = file.name.split('.').pop();
            file.content = "<Codearea lang='" + ext + "'>" + _.escape(file.text) + "</Codearea>";
            file.valid = true;

            return file;
        });
    },

    codeareasArrange: function() {
        var files = {};

        _.each(this._codeAreas, function(item) {
            var lang = item.get('lang');
            files[lang] = files[lang] || [];
            files[lang].push(item.value());
        });

        return files;
    },

    runCode: function() {
        var files = this.codeareasArrange();
        var practice = this.get('practice');

        SandboxLauncher.run(files, practice, this._iframe);
        this._controlsDisable();
        this.set('submitLoader', true);
    },

    _controlsDisable: function() {

    },

    validate: function() {
        var is_valid = true;
        var item_is_valid;
        var self = this;

        _.each(this._codeAreas, function(code, i) {
            item_is_valid = code.isValid();


            if (!item_is_valid) {
                is_valid = false;
            }

            self.set('tabs.' + i + '.valid', item_is_valid);
        });

        return is_valid;
    },

    exec: function() {
        var first_invalid_tab_index;

        if (this.validate()) {
            this.runCode();
        } else {
            first_invalid_tab_index = _.findIndex(this.data.tabs, { 'valid': false });
            this._getTabs().showTab(first_invalid_tab_index);
        }
    },

    buildReportMessage: function(report) {
        var message,
            type;

        if (!report.passed) {
            type = "danger";
            message = report.suites[0].specs[0].failures[0].message;
        } else {
            type = "success";
            message = "Good job!";
        }

        return {message: message, type: type};
    },

    showReport: function(event, data) {
        var report = this.buildReportMessage(data);

        this.set(
        {
            submitLoader: false,
            alert: {
                visible: true,
                message: report.message,
                type: report.type
            }
        });
    },

    hideReport: function() {
        this.set("alert.visible", false);
    },

    _getTabs: function() {
        return this._tabs[0];
    },

    data: {
        alert: {
            visible: false,
            message: null,
            type: null
        },
        tabs: [],
        template: '',
        practice: {},
        submitLoader: false,
        isSubmitLoader: function() {
            return this.get('submitLoader');
        }
    }

});

module.exports = PracticeSandbox;
