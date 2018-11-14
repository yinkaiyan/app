import React,{Component} from 'react'
import {HashRouter as Router, withRouter,Route,NavLink } from 'react-router-dom'

import Top from './top';
import Menu from './menu';
import Content from './content';

var style={
  height:"calc(100% - 100px)",
  float:"left",
  width: "100%",
  zIndex:"99999",
  position: "relative",
}

export default class index extends Component{
  render() {
    return (
      <div style={style}>
          <Router>
              <div>
                <Top></Top>
                <Content></Content>
                <Menu></Menu>
              </div>
          </Router>
      </div>
    );
  }
}

