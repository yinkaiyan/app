import React,{Component} from 'react'

import { Route } from 'react-router-dom'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
var style={
  list:{
    margin:"20px",
  }
}
export default class information extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  render() {
    return (
      <div>
          <p>发现</p>
          <Button type="primary">个人信息</Button><WhiteSpace />
      </div>
    );
  }
}

