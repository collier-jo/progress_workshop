"use strict";

describe("Checker", function(){
  it("Add ~ onto every word", function(){
    var checkertest = new SpellChecker

    expect(checkertest.checker("He00l")).toEqual("~He00l~")
  })
})