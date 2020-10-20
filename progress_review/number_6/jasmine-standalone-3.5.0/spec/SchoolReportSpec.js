"use strict";

describe("School Report", function() {
  it("Takes a single digit under 49", ()=> {
    let schoolReport = new SchoolReport
    expect(schoolReport.simpleResults("1")).toEqual("Red: 1")
  })

  it("Takes a single digit 50 + to return amber", () => {
    let schoolReport = new SchoolReport
    expect(schoolReport.simpleResults("50")).toEqual("Amber: 1")
  })
});
