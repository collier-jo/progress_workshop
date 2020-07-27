

class SpellChecker {
  constructor(){
  }

  checker(text){
    var wordArray = text.split(" ")
    var checkedArray = []

    for(var i = 0; i < wordArray.length; i ++){
      var singleWord = wordArray[i]
      var checkedWord = this.library(singleWord)
      checkedArray.push(checkedWord)
    }
    var checkedString = checkedArray.join(" ")

    return checkedString
  };

  library(text){
    var correctWords = ["is", "my", "name", "jo"]
    if(!correctWords.includes(text)){
      return `~${text}~`
    } else {
      return text
    }
  }
};

