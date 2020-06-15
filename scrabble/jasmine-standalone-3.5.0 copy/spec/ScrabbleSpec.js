'use strict';

describe("Scrabble", function(){
  it("takes blank user input and output 0", function(){
    var scrabble = new Scrabble(" ")
    expect(scrabble.score()).toEqual(0)
  })
})