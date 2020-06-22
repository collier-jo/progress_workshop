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
})