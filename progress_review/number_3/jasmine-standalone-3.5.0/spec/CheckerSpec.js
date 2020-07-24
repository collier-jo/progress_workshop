"use strict";

describe("Checker", function(){
  it("Add ~ onto misspelt word hello", function(){
    var checkertest = new SpellChecker
    expect(checkertest.checker("He00l")).toEqual("~He00l~")
  });

  it("Add ~ onto M0rning", function(){
    var checkertest = new SpellChecker
    expect(checkertest.checker("M0rning")).toEqual("~M0rning~")
  });


})