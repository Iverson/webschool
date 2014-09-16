describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(ractive.get("greeting")).toBe("Hello");
    expect(ractive.get("recipient")).toBe("world");
  });
});