
// 目录 reducer/index.js
import {combineReducers} from "redux";
import users from "./users";
import todoList from './todoList'

export default combineReducers({
  users,
  todoList,
});
