"use strict";

describe("Checker", function(){
  it("Add ~ onto misspelt word hello", function(){
    let checkertest = new SpellChecker
    expect(checkertest.checker("He00l")).toEqual("~He00l~")
  });

  it("Add ~ onto M0rning", function(){
    let checkertest = new SpellChecker
    expect(checkertest.checker("M0rning")).toEqual("~M0rning~")
  });

  it("Adds ~ in sentence made up of mispellings", function(){
    let checkertest = new SpellChecker 
    expect(checkertest.checker("skghvb ajfksg")).toEqual("~skghvb~ ~ajfksg~")
  })


})