
const saveUsers = (state={}, action) => {
  switch (action.type) {
    case 'SAVE_USERINFO':
      return{
        ...state,
        saveUserInfo: action.data
      }

    case 'SAVE_USER':
      return {
        ...state,
        saveUsername: action.data
      }
    default:
      return state
  }
}

export default saveUsers