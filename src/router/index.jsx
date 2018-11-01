import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  Switch, 
  Link,  
  Redirect, 
  withRouter } from 'react-router-dom';

// 组件
import Layout from '../views/layout'

// redux
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../store/reducers/'

// 初始化数据
const initValues = {
  users: {
    name: 'siguang'
  }
}
const storeEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer, initValues, storeEnhancers);


// 设置全局对象来接收Store，方便查看
window.hisStore = store;

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Layout />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
