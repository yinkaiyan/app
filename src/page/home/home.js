import React,{Component} from 'react'

import { Route ,NavLink} from 'react-router-dom'
import { Button, WhiteSpace,Carousel ,WingBlank, NoticeBar, Icon } from 'antd-mobile';


var style={
  box:{
    float:"left",
    width:"100%",
  },
  WingBlank:{
    margin:"0px",
    padding:"0px",
    height:"198px"
  }
};


const iconlist=[
  {
    link:"/ticket/homePage",
    label:"饭票",
    icon:require("./img/icon01.png"),
  },
  {
    link:"/more",
    label:"影票",
    icon:require("./img/icon02.png"),
  },
  {
    link:"/home/life",
    label:"商城",
    icon:require("./img/icon03.png"),
  },
  {
    link:"/home/finance",
    label:"积分",
    icon:require("./img/icon04.png"),
  },
  {
    link:"/home/my",
    label:"推荐有礼",
    icon:require("./img/icon05.png"),
  },
  {
    link:"/home/life",
    label:"分期贷款",
    icon:require("./img/icon06.png"),
  },
  {
    link:"/home/finance",
    label:"查账还款",
    icon:require("./img/icon07.png"),
  },
  {
    link:"/home/my",
    label:"掌上管家",
    icon:require("./img/icon08.png"),
  },
  {
    link:"/home/finance",
    label:"分期购",
    icon:require("./img/icon09.png"),
  },
  {
    link:"/home/my",
    label:"全部",
    icon:require("./img/icon10.png"),
  },
];
//列表
const hot_list=[
  {
    link:"/home/index",
    title:"而我儿童人格天野",
    content:"问问广泛的个人体会",
    icon:require("./img/list03.png"),
  },
  {
    link:"/home/index",
    title:"大哥哥挂号费更好",
    content:"回复孤独和风格回访电话",
    icon:require("./img/list02.png"),
  },
  {
    link:"/home/index",
    title:"热突然有人同意后",
    content:"退热贴用途建议兔兔",
    icon:require("./img/list01.png"),
  },
  {
    link:"/home/index",
    title:"玩儿味儿",
    content:"在哦哦哦哦一抬头儿童",
    icon:require("./img/list04.png"),
  },
];
export default class home extends Component{
  state = {
    //轮播图
    data: [
      require("./img/bannt01.png"),
      require("./img/bannt02.png"),
      require("./img/bannt03.png"),
    ],
    imgHeight: 198,
  }
  componentDidMount() {
    console.log(this.props);
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
                  style={{ display: 'inline-block', width: '100%',height: this.state.imgHeight }}
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
          <div className="notice">
            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
              公告提示,办卡优惠送这送那,送女朋友什么都送啦,快来办卡拉,活动会结束了还不办。
            </NoticeBar>
          </div>
          <div className="icon_box">
            {
              iconlist.map((item, index) => {
                return <div className="icon_list" key={index}>
                    <NavLink to={item.link}>
                      <div className="icon_icon">
                        <img src={item.icon} />
                      </div>
                      <div className="icon_text">
                         {item.label}
                      </div>
                    </NavLink>
                </div>
              })
            }
          </div>
          <div className="amount_of_money">
              <div className="amount_left">
                 <img src={require("./img/qian01.png")} />
              </div>
              <div className="amount_in">
                <div className="amount_in_top">
                  您的最高可贷金额
                </div>
                <div className="amount_in_in">
                  30000,00
                </div>
                <div className="amount_in_bom">
                  您的智能生活管家
                </div>
              </div>
              <div className="amount_right">
                <Button type="ghost" inline size="small" style={{ marginTop: '25px' }} className="am-button-borderfix">
                   额度测评
                </Button>
              </div>
          </div>
          <div className="time">
            <div className="time_phone">
              <div className="time_phone_text">
                <div>手机世界</div>
                <div>双11枪卷立减</div>
              </div>
              <div className="time_phone_icon">
                <img src={require("./img/phone.png")} />
              </div>
            </div>
            <div className="time_vehicle">
              <div className="time_phone_text">
                <div>汽车生活</div>
                <div>免息购乐享车</div>
              </div>
              <div className="time_phone_icon">
                <img src={require("./img/qiche.png")} />
              </div>
            </div>
            <div className="time_aircraft">
              <div className="time_phone_text">
                <div>行走时光</div>
                <div>买门票享立减</div>
              </div>
              <div className="time_phone_icon">
                <img src={require("./img/feiji.png")} />
              </div>
            </div>
          </div>
          <div className="Hot">
            <div className="Hot-title">热门活动</div>
            <div className="Hot-btn">查看更多</div>
          </div>
          <div className="Hot_list_box">
            {
              hot_list.map((item, index) => {
                return <div className="Hot_list" key={index}>
                  <div className="Hot_list_icon">
                    <img src={item.icon} />
                  </div>
                  <div className="Hot_list_con">
                    <div className="Hot_list_con_title">
                      {item.title}
                    </div>
                    <div className="Hot_list_con_text">
                      {item.content}
                    </div>
                  </div>
                  <div className="Hot_list_link">
                    <img src={require("./img/jiantou.png")} />
                  </div>
                </div>
              })
            }
          </div>
          <div className="Hot">
            <div className="Hot-title">掌上推荐</div>
          </div>
          <div className="time">
            <div className="time_phone">
              <div className="time_phone_text">
                <div>领券中心</div>
                <div>领券中心心心</div>
              </div>
              <div className="time_phone_icon">
                <img src={require("./img/icon01.png")} />
              </div>
            </div>
            <div className="time_vehicle">
              <div className="time_phone_text">
                <div>新用户区</div>
                <div>新用户区区区</div>
              </div>
              <div className="time_phone_icon">
                <img src={require("./img/icon07.png")} />
              </div>
            </div>
            <div className="time_aircraft">
              <div className="time_phone_text">
                <div>邀请好友</div>
                <div>邀请好友啊啊</div>
              </div>
              <div className="time_phone_icon">
                <img src={require("./img/qiche.png")} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

