import React,{Component} from 'react'
import {HashRouter as Router, withRouter,Route,NavLink } from 'react-router-dom'

import homePage from './homePage';
import my from './my';
import classification from './classification';

var style={
  width: "100%",
  float: "left",
  background:"#fff",
  marginTop:"5px",
  paddingBottom:"56px",
}

export default class index extends Component{
  render() {
    return (
      <div style={style}>
          <Route path={'/ticket/homePage'} component={homePage}></Route>
          <Route path={'/ticket/my'} component={my}></Route>
          <Route path={'/ticket/classification'} component={classification}></Route>
      </div>
    );
  }
}

