class TodoList {
  constructor(){
    this.list = []
    this.index = 0
  }


  add(text){
    this.index ++
    this.list.push(`${this.index}. ${text}`)

    var viewList = ""

    this.list.forEach(element => 
      viewList += element + "\n"
    )

    return viewList
    
    
  }
}