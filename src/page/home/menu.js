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
    width:"20%",
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
    link:"/home/index",
    label:"精选",
    icon:"star",
  },
  {
    link:"/home/find",
    label:"发现",
    icon:"compass",
  },
  {
    link:"/home/life",
    label:"生活",
    icon:"coffee",
  },
  {
    link:"/home/finance",
    label:"卡金融",
    icon:"credit-card",
  },
  {
    link:"/home/my",
    label:"我的",
    icon:"user",
  },
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
                  <div style={style.menulist} className={this.state.activeindex === index ? 'activecolor' : ''} >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div style={style.menulist} className={this.state.activeindex === index ? 'activecolor' : ''} >{item.label}</div>
                </NavLink>
             </div>
          })
        }
        </div>
    );
  }
}

