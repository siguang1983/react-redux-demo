
const todoList = (state=[], action) => {
  switch(action.type){
    case "TODO_LIST":
      return [
        ...state,
        action.data
      ]

    case"DELETE_TODO":
      let arr = [];
      // 根据id删除一项
      if(state.length > 0){
        arr = state.filter((item, idx, arr) => {
          return item.key !== action.data.key
        })
        state = arr;
      }
      return [
        ...state
      ]
      
    default:
      return state
  }
}

export default todoList