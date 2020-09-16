class TodoList {
  constructor(){
    this.list = []
  }
  todo(text){
    var userInputArray = text.split(" ")
    // var variable = (userInputArray[0] === "add") ? (this._add(userInputArray)) : ((userInputArray[0] === "done") ? (this._delete(userInputArray)) : ("Invalid Input: You should use add or done with a space after"))

    // var x = (userInputArray[0] === "add") ? this._add(userInputArray) : (userInputArray[0] === "done") ? this._delete(userInputArray) : "Invalid Input: You should use add or done with a space after";

    // var answer = userInputArray[0] === "add" ? this._add(userInputArray) : (userInputArray[0] === "done" ? this._delete(userInputArray) : "Invalid Input: You should use add or done with a space after")
      

    if(userInputArray[0] === "add") {
      this._add(userInputArray)
    } else if(userInputArray[0] === "done"){
      this._delete(userInputArray)
    } else {
      return "Invalid Input: You should use add or done with a space after"
    }

    return this._display()
  }

  _add(array){
    array.splice(0,1)
    var todo = array.join(" ")
    this.list.push(todo)
  }

  _delete(array){
    var itemNumber = array[1] - 1
    this.list.splice(itemNumber, 1)
  }

  _display(){
    var format = ""

    this.list.forEach((element, index) => {
      format += `${index + 1}. ${element}\n` 
    })

    return format
  }
}

