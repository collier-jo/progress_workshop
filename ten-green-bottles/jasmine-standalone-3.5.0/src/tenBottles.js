class TenGreenBottles {
  constructor(number){
    this.number = number
  }

  song() {
    if(this.number === 1){
      return  "One green bottle\nHanging on the wall\nOne green bottle\nHanging on the wall\nIf that one green bottle\nShould accidentally fall\nThere'll be no green bottles\nHanging on the wall";
    } else {
      return "Two green bottles\nHanging on the wall\nTwo green bottles\nHanging on the wall\nAnd if one green bottle\nShould accidentally fall\nThere'll be one green bottle\nHanging on the wall\n\nOne green bottle\nHanging on the wall\nOne green bottle\nHanging on the wall\nIf that one green bottle\nShould accidentally fall\nThere'll be no green bottles\nHanging on the wall";
    }    
  }
}