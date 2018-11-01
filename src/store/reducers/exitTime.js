const exitTime = (state = [], action) => {
  switch (action.type) {
    case 'LAST_TIME':
      return{
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'BEGIN_TIME': 
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

export default exitTime