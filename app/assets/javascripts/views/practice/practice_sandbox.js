Views.PracticeSandbox = Ractive.extend({
    el: '.b-practice',
    template: JST['templates/practice/sandbox'](),

    init: function() {
      this._codeAreas = this.findAllComponents('Codearea');
      this._iframe = this.find('.b-sandbox-result');
    },

    exec: function() {
      var content = Mustache.render(this.get('template'), {
        html: this._codeAreas[0].value(),
        css: this._codeAreas[1].value(),
        js: this._codeAreas[2].value()
      });
      var iframe_window = this._iframe.contentWindow;
      
      iframe_window.document.open();
      iframe_window.document.write(content);

      $(iframe_window.document).ready(function() {
        if (iframe_window.onload) {
          iframe_window.onload();
        }
      });
    }

  });