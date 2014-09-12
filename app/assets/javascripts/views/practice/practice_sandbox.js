Views.PracticeSandbox = Ractive.extend({
    el: '.b-practice',
    template: JST['templates/practice/sandbox'](),

    init: function() {
      this._codeAreas = this.findAllComponents('Codearea');
      this._iframe = this.find('.b-sandbox-result');
      console.log(this._codeAreas);
    },

    exec: function() {
        this._iframe.contentDocument.documentElement.innerHTML = Mustache.render(this.get('template'), {
          html: this._codeAreas[0].value(),
          css: this._codeAreas[1].value(),
          js: this._codeAreas[2].value()
        });
    }

  });