class SpellChecker {
  
  checker(text){
    var wordArray = text.split(" ")
    var checkedArray = []

    for(var i = 0; i < wordArray.length; i ++){
      var singleWord = wordArray[i]
      var wrongWord = `~${singleWord}~`
      checkedArray.push(wrongWord)
    }
    var checkedString = checkedArray.join(" ")

    return checkedString
  };
};
