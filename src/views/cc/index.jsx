import React, { Component } from 'react'
import { 
  Button,
  Input } from 'antd';
  
import ComponentA from './componentA'
import ComponentB from './componentB'

import { connect } from 'react-redux'
import * as actions from '../../store/actions/exitTime'

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeNum: 0
    }
  }

  handleIncrementClick(){
    this.props.exitTime(this.state.timeNum);      // 触发dispatch
  }

  changeTime(evt){
    this.setState({
      timeNum: evt.target.value
    })
  }
  
  render() {
    return (
      <div>
        <div style={{ width: '50%', padding: "20px 0" }}>
          <h1>Main组件:</h1>
          <Input placeholder="Basic usage" value={this.state.timeNum} onChange={this.changeTime.bind(this)} />
          <Button type="primary" onClick={this.handleIncrementClick.bind(this)}>确认</Button>
        </div>

        <ComponentA />
        <ComponentB />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const MainLink = connect(
  mapStateToProps,
  actions
  // mapDispatchToProps
)(Main)

export default MainLink
