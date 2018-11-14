import React,{Component} from 'react'
import { withRouter,NavLink ,Route} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

require('./index.css');

const style={
  menu:{
    height:"50px",
    position: "fixed",
    bottom:"0px",
    width:"100%",
  },
  menuBox:{
    width:"33.33%",
    float: "left",
    textAlign:"center",
  },
  menulist:{
    width:"100%",
    float:"left",
    marginTop:"6px",
    color:"gray"
  }
};

const list=[
  {
    link:"/ticket/homePage",
    label:"首页",
    icon:"heartbeat",
  },
  {
    link:"/ticket/classification",
    label:"分类",
    icon:"podcast",
  },
  {
    link:"/ticket/my",
    label:"我的",
    icon:"user",
  }
];//

export default class menu extends Component{
  // componentWillReceiveProps (nextProps){
  //   console.log(nextProps)
  // }
  state={
    activeindex:0,
  };
  handleClick=(e)=>{
    //this.props.history.push('/my')
  }
  activeTab(index) {
    console.log(index);
    this.setState({
      activeindex:index
    })
  }
  render() {
    return (
        <div className="menu_box" style={style.menu}>
        {
          list.map((item, index) => {
            return <div style={style.menuBox} onClick={this.activeTab.bind(this,index)} key={index}>
                <NavLink to={item.link}>
                  <div style={style.menulist} className={this.state.activeindex === index ? 'activecolor_' : ''} >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div style={style.menulist} className={this.state.activeindex === index ? 'activecolor_' : ''} >{item.label}</div>
                </NavLink>
             </div>
          })
        }
        </div>
    );
  }
}

