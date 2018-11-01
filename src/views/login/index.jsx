import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Input, Button } from 'antd';

import { connect } from "react-redux";
import * as Action from '../../store/actions/users'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      logined: true,
      username: '',
      password: ''
    }
  }

  changeUsername(evt){
    this.setState({
      username: evt.target.value
    })
  }
  changePassword(evt){
    this.setState({
      password: evt.target.value
    })
  }
  login(){
    console.log(`${this.state.username} ---- ${this.state.password}`);
    let loginData = {
      username: this.state.username,
      password: this.state.password
    }

    // 这里触发mapDispatchToProps中定义的dispach来找到指定的action
    this.props.saveUserInfo(loginData);
    alert('登录成功')
  }

  logOut(){
    this.props.saveUserInfo(null);
  }

  saveUsername(){
    let username = this.state.username;
    this.props.saveUser(username);
  }

  componentDidMount(){
    const { saveUserInfo } = this.props;
    if(!saveUserInfo){
      alert('未登录');
    }
  }


  render() {
    if(!this.state.logined){
      return (
        <Redirect to="/todoList" />
      )
    }

    return (
      <div>
        这里是Login组件
        <div>
          <p>用户名:<Input placeholder="" value={this.state.username} onChange={this.changeUsername.bind(this)} /></p>
          <p>密码:<Input placeholder="" value={this.state.password} onChange={this.changePassword.bind(this)} /></p>
          <p><Button type="primary" onClick={this.login.bind(this)}>登录</Button></p>
          <p><Button type="primary" onClick={this.logOut.bind(this)}>退出</Button></p>
          <p><Button type="primary" onClick={this.saveUsername.bind(this)}>保存用户名</Button></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    saveUserInfo: state.saveUserInfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveUserInfo: (data)=>{      // data来接收参数值
      dispatch(Action.saveUserInfo(data))
    },
    saveUser: (data)=>{      // data来接收参数值
      dispatch(Action.saveUser(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
