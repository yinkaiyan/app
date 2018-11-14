import React,{Component} from 'react'
import {HashRouter as Router, withRouter,Route,NavLink } from 'react-router-dom'

import index from './home';
import find from './find';
import life from './life';
import finance from './finance';
import my from './my';

var style={
  width: "100%",
  float: "left",
  background:"#fff",
  paddingBottom:"56px",
  marginTop:"5px",
}

export default class home extends Component{
  render() {
    return (
      <div style={style}>
          <Route path={'/home/index'} component={index}></Route>
          <Route path={'/home/find'} component={find}></Route>
          <Route path={'/home/life'} component={life}></Route>
          <Route path={'/home/finance'} component={finance}></Route>
          <Route path={'/home/my'} component={my}></Route>
      </div>
    );
  }
}

