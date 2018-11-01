import React, { Component } from 'react'
import { Route,
  Link,
  Redirect } from 'react-router-dom';
import { Button, Table, Divider, Tag } from 'antd';

import { connect } from "react-redux";
import * as userAction from '../../store/actions/users'
import * as todoAction from '../../store/actions/todoList'

import AddTodo from './addTodo'


  // const data = [{
  //   key: '1',
  //   name: 'John Brown',
  //   age: 32,
  //   address: 'New York No. 1 Lake Park',
  //   tags: ['nice', 'developer'],
  // }, {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 1 Lake Park',
  //   tags: ['loser'],
  // }, {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher'],
  // }];

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoData: [],
      columns: [
        {
          title: '反馈方',
          dataIndex: 'feedbackParty',
          key: 'feedbackParty'
        }, 
        {
          title: '业务线',
          dataIndex: 'business',
          key: 'business'
        }, 
        {
          title: '问题描述',
          dataIndex: 'question',
          key: 'question'
        }, 
        {
          title: '解决方法',
          dataIndex: 'resolvent',
          key: 'resolvent'
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          render: (text, record) => (
            <span>
              <Button onClick={this.deleteTodo.bind(this, record)}>删除</Button>
            </span>
          ),
        }
      ]
    }
  }


  deleteTodo(data){
    this.props.deleteTodo(data);
  }

  loadAddTodo(){
    this.props.history.push('/todoList/addTodo');
  }

  render() {
    const { saveUserInfo } = this.props;
    if(!saveUserInfo){
      alert('请先登录')
      return <Redirect to="/login" />
    }
    
    return (
      <div>
        <div>问题反馈列表组件</div>
        <Button type="primary" onClick={this.loadAddTodo.bind(this)}>打开添加问题面板</Button>
        <div style={{backgroundColor: "#fff", marginTop: "20px"}}>
          <Table columns={this.state.columns} dataSource={this.props.todoList} />
        </div>

        <Route path="/todoList/addTodo" component={AddTodo} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    saveUserInfo: state.users.saveUserInfo,
    todoList: state.todoList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendLogin: (data)=>{      // data来接收参数值
      dispatch(userAction.saveUserInfo(data))
    },
    addTodo: (data)=>{
      dispatch(todoAction.todoList(data))
    },
    deleteTodo: (data) => {
      dispatch(todoAction.deleteTodo(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);