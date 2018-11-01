import React, { Component } from 'react'
import { connect } from "react-redux";
import * as todoAction from '../../store/actions/todoList'

import { Input,
  Button} from 'antd';

let listNumber = 0;

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedbackParty: '',
      business: '',
      question: '',
      resolvent: '',
    };
  }

  addTodo(){
    let obj = Object.assign({}, this.state);
    obj['key'] = listNumber++;
    this.props.addTodo(obj)
  }

  changeFeedbackParty(evt){
    this.setState({
      feedbackParty: evt.target.value
    })
  }
  changeBusiness(evt){
    this.setState({
      business: evt.target.value
    })
  }
  changeQuestion(evt){
    this.setState({
      question: evt.target.value
    })
  }
  changeResolvent(evt){
    this.setState({
      resolvent: evt.target.value
    })
  }

  render() {
    return (
      <div style={{ width: "80%", padding: "20px 0", backgroundColor: "#7692ad", margin: "50px auto", color:"#fff"}}>
        <div style={{ width: "80%", margin: "20px auto", paddingTop: "15px" }}>
          <p>反馈方:<Input placeholder="" value={this.state.feedbackParty} onChange={this.changeFeedbackParty.bind(this)} /> </p>
          <p>业务线:<Input placeholder="" value={this.state.business} onChange={this.changeBusiness.bind(this)} /> </p>
          <p>问题描述:<Input placeholder="" value={this.state.question} onChange={this.changeQuestion.bind(this)} /> </p>
          <p>解决方法:<Input placeholder="" value={this.state.resolvent} onChange={this.changeResolvent.bind(this)} /> </p>
          <div>
            <Button type="primary" onClick={this.addTodo.bind(this)}>添加Todo</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (data)=>{
      dispatch(todoAction.todoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);