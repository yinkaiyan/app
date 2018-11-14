import React,{Component} from 'react'

import { Route ,NavLink,Link} from 'react-router-dom'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
var style={
    box:{
        float:"left",
        width:"100%"
    },
    bgimg:{
        position: "fixed",
        width:"100%",
        height:"100%",
        left:"0px",
        top:"0px"
    },
    img:{
        display:"block",
        width:"100%",
        height:"100%"
    },
    btn:{
        position: "absolute",
        bottom: "52px",
        width:"86px",
        marginLeft:"calc(50% - 43px)",
        color:"rgb(118, 113, 113)",
        outline: "0 none",
        fontSize:"16px",
        lineHeight:"42px",
        backgroundColor:"#fff",
        borderRadius:"4px",
        textAlign:"center",
    }
};
export default class loding extends Component{
    state = {
        //轮播图
        data: 10,
        imgHeight: 198,
      }
  render() {
    return (
      <div style={style.box}>
        <div style={style.bgimg}>
            <img style={style.img} src={require("../imgaes/kaishi.png")} />
            {/* <NavLink style={style.btn} to={{
                pathname:'/home/index',
            }} > */}
            <Link style={style.btn}  to={{
                 pathname:"/home/index", 
                 query: {
                    id: '1'
                 }, 
                 state:{data:'miao'} 
                }}>
                立即体验
            </Link>
        </div>
      </div>
    );
  }
}

