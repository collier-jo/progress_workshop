class SchoolReport{

  simpleResults(arg){


    const numberList = arg.split(",")

    // argument this could be a constructor 
    let catagories = {
      Green: 0,
      Amber: 0,
      Red: 0,
      Uncountable: 0
    }
     
    let results = []

// move into private function 
    numberList.forEach(item => {
      if(item <= 49){
        catagories["Red"] += 1
      } else if(item <= 69){
        catagories["Amber"] += 1
      } else if(item >= 70){
        catagories["Green"] += 1
      } else {
        catagories["Uncountable"] += 1
      }
    }) 

  // move into private function 
    for(const property in catagories){
      if(catagories[property] >= 1){
        results.push(`${property}: ${catagories[property]}`) 
      }
    }

    return results.join("\n")
  }

}