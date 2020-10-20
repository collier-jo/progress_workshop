class SchoolReport{

  constructor(){
    this.catagories = {
      Green: 0,
      Amber: 0,
      Red: 0,
      Uncountable: 0
    }
  }

  simpleResults(arg){
    const numberList = arg.split(",")
    this._catagoriseNumbers(numberList)
    let finalResults = this._compleFinalResults().join("\n")

    return finalResults
  }

  _catagoriseNumbers(numberList){

    numberList.forEach(item => {
      if(item === " "){
        this.catagories["Uncountable"] += 1
      } else if(item <= 49){
        this.catagories["Red"] += 1
      } else if(item <= 69){
        this.catagories["Amber"] += 1
      } else if(item >= 70){
        this.catagories["Green"] += 1
      } else {
        this.catagories["Uncountable"] += 1
      }
    }) 
  }

  _compleFinalResults(){
    let results = []

    for(const property in this.catagories){
      if(this.catagories[property] >= 1){
        results.push(`${property}: ${this.catagories[property]}`) 
      }
    }
    return results
  }

}