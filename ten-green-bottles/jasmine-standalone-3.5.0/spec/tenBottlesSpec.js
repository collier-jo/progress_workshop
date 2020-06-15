'use strict';

describe("TenGreenBottles", () => {
  // var tenGreenBottles

  // beforeEach(function(){
  //   tenGreenBottles = new TenGreenBottles;
  // });

  it("Prints 1 greenbottle verse", () => {
    var tenGreenBottles = new TenGreenBottles(1)
    let verse = "One green bottle\nHanging on the wall\nOne green bottle\nHanging on the wall\nIf that one green bottle\nShould accidentally fall\nThere'll be no green bottles\nHanging on the wall";

    expect(tenGreenBottles.song()).toEqual(verse);
  });

  it("Prints 2 greenbottle verses", () => {
    var tenGreenBottles = new TenGreenBottles(2)
    let verse = "Two green bottles\nHanging on the wall\nTwo green bottles\nHanging on the wall\nAnd if one green bottle\nShould accidentally fall\nThere'll be one green bottle\nHanging on the wall\n\nOne green bottle\nHanging on the wall\nOne green bottle\nHanging on the wall\nIf that one green bottle\nShould accidentally fall\nThere'll be no green bottles\nHanging on the wall";
    expect(tenGreenBottles.song()).toEqual(verse);
  });

  
});


/// maybe verse method