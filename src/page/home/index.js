import React,{Component} from 'react'
import {HashRouter as Router, withRouter,Route,NavLink } from 'react-router-dom'

import Menu from './menu';
import Top from './top';
import Content from './content';

var style={
  height:"calc(100% - 100px)",
  position: "absolute",
  width: "100%"
}

export default class index extends Component{
  componentWillMount(){
    console.log(this.props);
  }
  constructor(props) {
    super(props);
    console.log(this.props);
}
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

