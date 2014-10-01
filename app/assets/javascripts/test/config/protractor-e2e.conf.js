exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    chromeOnly: true,

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3000',

    onPrepare: function(){
        browser.ignoreSynchronization = true;
    },

    suites: {
        angular: ['../e2e/**/*.js']
    },

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }

};