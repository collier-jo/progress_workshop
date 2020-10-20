"use strict";

describe("School Report", function() {
  it("Takes a single digit under 49", ()=> {
    let schoolReport = new SchoolReport
    expect(schoolReport.simpleResults("1")).toEqual("Red: 1")
  })
});
