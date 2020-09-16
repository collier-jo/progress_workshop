'use strict';

describe("To Do list", () => {

  it("Can add a todo to list", () => {
    var todo = new TodoList
    expect(todo.add("Get soya milk")).toEqual("1. Get soya milk\n")
  })

  it("Add two items to list", () => {
    var todo = new TodoList 
    todo.add("Get hair cut")
    expect(todo.add("Doctors app")).toEqual("1. Get hair cut\n2. Doctors app\n")
  })

})