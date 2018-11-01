import React, { Component } from 'react'
import {
  Route,
  Link,
  Switch } from 'react-router-dom';
import { connect } from "react-redux";
import * as Action from '../../store/actions/users'

class Head extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuList: [],
      username: ""
    }
  }

  componentDidMount(){
    this.getMenuData();
    this.setState({
      userInfo: this.props.saveUserInfo
    })
  }

  getMenuData(){
    const menu = [
      {
        title: '首页',
        path: "/",
      },
      {
        title: '登录',
        path: "/login",
      },
      {
        title: '问题反馈',
        path: "/todoList",
      },
    ]

    this.setState({
      menuList: menu
    })
  }

  logOut(){
    this.props.clearUserInfo(null);
  }

  render() {
    let menuHtml = () => {
      const menuItem = [];
      this.state.menuList.forEach(function(menu, idx, arr){
        menuItem.push(
          <li key={idx}>
            <Link to={menu.path}>{menu.title}</Link>
          </li>
        )
      })
      return menuItem
    }

    // let getUser = () => {
    //   if(this.props.saveUserInfo){
    //     return ` <p>${ this.props.saveUserInfo.username } 欢迎登录</p><p onClick={this.logOut.bind(this)}>退出登录</p>`
    //   }
    // }

    return (
      <div>
        <div style={{width: "50%", float: "left"}}>
          { menuHtml() }
        </div>
        {/*<div style={{width: "calc(50%-20px)", float: "right", textAlign: "right", marginRight: "20px"}} dangerouslySetInnerHTML={{ __html: this.getUser() }}></div> */}
        <div style={{width: "calc(50%-20px)", float: "right", textAlign: "right", marginRight: "20px"}}>
          {
            this.props.saveUserInfo ? <div><p>{ this.props.saveUserInfo.username } 欢迎登录</p><p onClick={this.logOut.bind(this)}>退出登录</p></div> : ''
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    saveUserInfo: state.users.saveUserInfo
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearUserInfo: (data)=>{      // data来接收参数值
      dispatch(Action.saveUserInfo(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);