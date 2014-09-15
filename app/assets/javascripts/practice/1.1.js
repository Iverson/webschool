describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(ractive.get("greeting")).toBe("Hello");
    expect(ractive.get("recipient")).toBe("world");
  });
});

var reporter = new jasmine.JSReporter2();

reporter.afterDone(function() {
    console.log(jasmine.jsReport);
});

jasmine.getEnv().addReporter(reporter);
// jasmine.getEnv().execute(); 

// $(document).ready(function() {
//     console.log('WINOD');
// });