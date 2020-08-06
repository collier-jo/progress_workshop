"use strict";

describe("StringCalculator", function(){

    var stringCalc

    beforeEach(function(){
      stringCalc = new StringCalculator
    });

    it("Simple sum 1 + 1", function(){
      expect(stringCalc.calculate("1 + 1")).toEqual(["1 + 1", 2])
    });

    it("Simple sum 2 + 2", function(){
      expect(stringCalc.calculate("2 + 2")).toEqual(["2 + 2", 4])
    });

    it("More than two numbers in sum", function(){
      expect(stringCalc.calculate("2 + 2 + 2")).toEqual(["2 + 2 + 2", 6])
    });

    it("More than two numbers in sum", function(){
      expect(stringCalc.calculate("2 + 2 + 2 + 2")).toEqual(["2 + 2 + 2 + 2", 8])
    });
})