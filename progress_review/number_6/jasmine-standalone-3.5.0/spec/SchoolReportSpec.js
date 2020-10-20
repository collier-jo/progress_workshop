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

  it("counts how many of each catagory", () => {
    expect(schoolReport.simpleResults("1,1,50,50,70,70")).toEqual("Green: 2\nAmber: 2\nRed: 2")
  })

  it("1 lone uncountable string given ", () => {
    expect(schoolReport.simpleResults("1 5")).toEqual("Uncountable: 1")
  })

  it("Missing comma to return uncountable ", () => {
    expect(schoolReport.simpleResults("70, 1 5")).toEqual("Green: 1\nUncountable: 1")
  })

  it("Missing comma to return uncountable ", () => {
    expect(schoolReport.simpleResults("1, 5, 70, 1 5, 50")).toEqual("Green: 1\nAmber: 1\n Red: 2\nUncountable: 1")
  })

  it("empty string", () => {
    expect(schoolReport.simpleResults(" ")).toEqual("Uncountable: 1")
  })
});

// Advice: 
// - Naming the arg a name relavent such as 
// - Working with grades and ranges of grade so edge cases would be 
//   - Empty string 
//   - Negative numbers 
// - Never handed out strong ut