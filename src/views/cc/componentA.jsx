import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  Button,
  Input } from 'antd';
  
let timer = null;

export class ComponentA extends Component {
  constructor(props){
    super(props);
    this.state = {
      curTime: 0,
      timer: null
    }
  }
  
  componentWillReceiveProps(nextProps, nextState){
    this.runTimer(nextProps.proTime.text);
  }


  runTimer(tNum){
    let that = this;
    clearInterval(timer);


    timer = setInterval(function(){
      if(tNum != 0){
        tNum--;
        that.setState({
          curTime: tNum
        })
      }
      else{
        clearInterval(timer)
      }
      console.log(tNum)
    }, 1000)
  }

  render() {
    return (
      <div>
        <div>componentA组件到计时时间 { this.state.curTime }</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    proTime: state        // 将Store中的state赋给proTime在返回给当前的props
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  };
}

const ComA = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA)

export default ComA