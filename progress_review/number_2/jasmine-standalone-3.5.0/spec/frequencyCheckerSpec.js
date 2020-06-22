'use strict';

describe("frequencyChecker", function(){
  
  // var checker 

  // beforeEach(function(){
  //   checker = new FrequencyChecker
  // })


  it("Takes an array of frequencies", function(){
    var checker = new FrequencyChecker([10, 100, 100, 1001])
    expect(checker.music).toEqual([10,100, 100, 1001])
  });

  it("Take the checks a single array 40", function(){
    var checker = new FrequencyChecker([40])
    expect(checker.checkLower()).toEqual([40])
  });

  it("Raise values lower than 40", function(){
    var checker = new FrequencyChecker([30])
    expect(checker.checkLower()).toEqual("Frequency below 40")
  });


})

// argument of having the music not stored just output 