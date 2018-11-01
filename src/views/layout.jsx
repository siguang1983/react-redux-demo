import React, { Component } from 'react'
import {
  Route,
  Link,
  Switch } from 'react-router-dom';

import Main from './main'
import Head from './head/'
import Login from './login/'
import TodoList from './todoList/'
import NotFoundPage from './notFoundPage'


export default class Layout extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <header style={{height: "100px"}}>
          <Head />
        </header>
        <main style={{ padding: "20px", backgroundColor: "#ccc" }}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/todoList" component={TodoList} />
            <Route component={NotFoundPage}></Route>
          </Switch>
        </main>
      </div>
    )
  }
}