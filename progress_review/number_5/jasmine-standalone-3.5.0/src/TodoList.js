class TodoList {
  constructor(){
    this.list = []
  }
  todo(text){
    var userInputArray = text.split(" ")

    if(userInputArray[0] === "add"){
      userInputArray.splice(0,1)
      var todo = userInputArray.join(" ")
      
      this.list.push(todo)

      var format = ""

      this.list.forEach((element, index) => {
        format += `${index + 1}. ${element}\n` 
      })

      console.log(format)

      return format

    } else {
      return "Invalid Input: You should use add or done with a space after"
    }

  }
}

