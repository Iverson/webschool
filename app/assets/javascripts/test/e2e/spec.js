'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

// Export protractor to the global namespace to be used in tests.
    // global.protractor = protractor;
    // global.browser = browser;
    // global.$ = browser.$;
    // global.$$ = browser.$$;
    // global.element = browser.element;

describe('my app', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Webschool');
    });

    it('should have a titels', function() {
        var brand_title = element(by.css('.navbar-brand'));
        var h2 = element(by.css('.col-sm-5 h2'));

        expect(brand_title.getText()).toEqual('Brand');
        expect(h2.getText()).toEqual('Side');
    });
  
  // describe('Posts page', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('/posts');
  //   });


  //   it('title in Post section', function() {
  //     expect(element('.page-header h1').text()).toBe("Last posts. Write new");
  //   });

  //   it('open new post form from Post section', function() {
  //     element('.page-header h1 a').click();

  //     expect(browser().location().url()).toBe("/posts/new");
  //     expect(element('.panel h3').text()).toBe("New post");
  //   });

  // });
  
});
