class Scrabble{
  constructor(word){
    this.word = word 
    this.total = 0
  }
  
  score(){
    if(this.word === " "){
      this.total += 0
      return this.total
    }else if(this.word === 'a'){
      this.total += 1
      return this.total
    }else{
      this.total += 0
      return this.total
    }
  }
}