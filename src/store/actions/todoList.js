
export const todoList = (data) => {
  return {
    type: "TODO_LIST",
    data
  }
}

export const deleteTodo= (data) => {
  return {
    type: "DELETE_TODO",
    data
  }
}