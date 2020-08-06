"use strict";

describe("StringCalculator", function(){

    it("Simple sum 1 + 1", function(){
      var stringCalc = new StringCalculator 
      expect(stringCalc.calculate("1 + 1")).toEqual(["1 + 1", 2])
    });

    it("Simple sum 2 + 2", function(){
      var stringCalc = new StringCalculator
      expect(stringCalc.calculate("2 + 2")).toEqual(["2 + 2", 4])
    });
})