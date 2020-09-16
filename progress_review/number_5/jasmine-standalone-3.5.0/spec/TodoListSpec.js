'use strict';

describe("To Do list", () => {

  it("Can add a todo to list", () => {
    var todo = new TodoList
    expect(todo.todo("add Get soya milk")).toEqual("1. Get soya milk\n")
  })

  it("Can add a todo to list", () => {
    var todo = new TodoList
    todo.todo("add item 1")
    expect(todo.todo("add item 2")).toEqual("1. item 1\n2. item 2\n")
    console.log(todo.todo("add item 3"))
  })

})