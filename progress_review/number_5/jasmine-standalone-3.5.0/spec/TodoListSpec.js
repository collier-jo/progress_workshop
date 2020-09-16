'use strict';

describe("To Do list", () => {

  it("Can add a todo to list", () => {
    var todo = new TodoList
    expect(todo.add("Get soya milk")).toEqual("1. Get soya milk")
  })
})