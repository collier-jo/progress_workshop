"use strict";

describe("Checker", function(){

  var checkertest 

  beforeEach(function(){
    checkertest = new SpellChecker

  })

  it("Add ~ onto misspelt word hello", function(){
    expect(checkertest.checker("He00l")).toEqual("~He00l~")
  });

  it("Add ~ onto M0rning", function(){
    expect(checkertest.checker("M0rning")).toEqual("~M0rning~")
  });

  it("Adds ~ in sentence made up of mispellings", function(){
    expect(checkertest.checker("skghvb ajfksg")).toEqual("~skghvb~ ~ajfksg~")
  })

  it("Checks words against a library", function(){
    expect(checkertest.library("iss")).toEqual("~iss~")
  })

  it("Checks a sentence with correct and incorrect words", function(){
    expect(checkertest.checker("my name iss jo")).toEqual("my name ~iss~ jo")
  })




})