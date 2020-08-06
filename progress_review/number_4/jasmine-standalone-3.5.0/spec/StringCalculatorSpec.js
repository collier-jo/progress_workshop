"use strict";

describe("StringCalculator", function(){

    it("Simple sum", function(){
      var stringCalc = new StringCalculator 
      expect(stringCalc.calculate("1 + 1")).toEqual(["1 + 1", 2])
    });

    
})