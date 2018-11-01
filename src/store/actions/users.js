
// 存储登录用户信息
export const saveUserInfo = (data) => {
  return {
    type: 'SAVE_USERINFO',
    data
  }
}

export const saveUser = (data) => {
  return {
    type: 'SAVE_USER',
    data
  }
}