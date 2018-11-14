import React,{Component} from 'react'

import { Route } from 'react-router-dom'
import { Button, WhiteSpace,Carousel ,WingBlank, NoticeBar, Icon } from 'antd-mobile';
var style={
    box:{
      float:"left",
      width:"100%",
    },
    WingBlank:{
      margin:"0px",
      padding:"0px",
      height:"172px",
    }
  };

export default class homePage extends Component{
  state = {
    //轮播图
    data: [
        require("./img/bannt01.png"),
        require("./img/bannt01.png"),
        require("./img/bannt01.png"),
    ],
    height:172,
  }
  componentWillMount (){
    console.log(this.props)
  }
  render() {
    return (
      <div style={style.box}>
        <WingBlank style={style.WingBlank}>
            <Carousel
              autoplay={false}
              infinite={true}
            >
              {this.state.data.map(val => (
                <a key={val}
                  href="javascript:;"
                  style={{ display: 'inline-block', width: '100%',height: this.state.height }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%'}}
                    onLoad={() => {
                      console.log(4);
                    }}
                  />
                </a>
              ))}
            </Carousel>
        </WingBlank>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
        <p>5454</p>
      </div>
    );
  }
}

