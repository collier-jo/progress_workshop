class SchoolReport{

  simpleResults(arg){

    let numberList = arg.split(",")
    let results = []

    numberList.forEach(item => {
      if(item <= 49){
        results.push("Red: 1")
      } else if(item <= 69){
        results.push("Amber: 1")
      } else {
        results.push("Green: 1")
      }
    }) 
    
    return results.reverse().join("\n")
  }

}