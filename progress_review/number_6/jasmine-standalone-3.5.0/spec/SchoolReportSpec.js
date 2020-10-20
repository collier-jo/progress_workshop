"use strict";

describe("School Report", function() {
  var schoolReport

  beforeEach(function(){
    schoolReport = new SchoolReport
  })

  it("Takes a single digit under 49", ()=> {
    expect(schoolReport.simpleResults("1")).toEqual("Red: 1")
  })

  it("Takes a single digit 50 + to return amber", () => {
    expect(schoolReport.simpleResults("50")).toEqual("Amber: 1")
  })

  it("Takes a single digit 70 + to return green", () => {
    expect(schoolReport.simpleResults("70")).toEqual("Green: 1")
  })

  it("Takes 3 number string and outputs all catagorises", () => {
    expect(schoolReport.simpleResults("1,50,70")).toEqual("Green: 1\nAmber: 1\nRed: 1")
  })
});
