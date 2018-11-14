import React,{Component} from 'react'
import {HashRouter as Router, withRouter,NavLink ,Route} from 'react-router-dom'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { SearchBar, Button, WhiteSpace, WingBlank,Popover, NavBar, Icon  } from 'antd-mobile';
require('./index.css');

const Item = Popover.Item;
//图标
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

const style={
  menutop:{
    height:"50px",
    position: "fixed",
    top:"0px",
    width:"100%",
    background:"#cc3333",
    zIndex:"99999",
  },
  saomaBox:{
    width:"32px",
    height:"32px",
    float:"left",
    margin:"9px",
  },
  saoma:{
    width:"32px",
    height:"32px",
    display:"block",
  },
  searchs:{
    width:"calc(100% - 100px)",
    float:"left",
    height:"32px",
    marginTop:"9px",
  }
};

export default class top extends Component{
  state={
    value:"",
    visible: false,
    selected: '',
  };
  handleClick=(e)=>{
    //this.props.history.push('/my')
  }
  searchsfun=(value)=>{
    this.setState({ value });
    console.log(this.state.value);
  }

  onSelectShow = (e) => {
    this.setState({
      visible: true,
    });
  };

  onSelect = (opt) => {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    console.log(visible);
    this.setState({
      visible,
    });
  };

  render() {
    return (
      <div>
        <div style={style.menutop}>
          <div style={style.saomaBox}>
            <NavLink to={'/home/index'}>
               <img style={style.saoma} src={require('../../imgaes/fanhui.png')} />
            </NavLink>
          </div>
          <div style={style.searchs}>
            <SearchBar 
            value={this.state.value} 
            placeholder="Search" 
            onChange={this.searchsfun}
            maxLength={8} />
          </div>
          <div style={style.saomaBox} onClick={this.onSelectShow}>
            <img style={style.saoma} src={require('../home/img/jiahao.png')} />
          </div>
        </div>
        {/* 下拉菜单 */}
        <div>
            <NavBar
              mode="light"
              rightContent={
                <Popover 
                  mask={false}
                  overlayClassName="fortest"
                  overlayStyle={{ color: 'currentColor' }}
                  visible={this.state.visible}
                  overlay={[
                    (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                    (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                    (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                      <span style={{ marginRight: 5 }}>Help</span>
                    </Item>),
                  ]}
                  align={{
                    overflow: { adjustY: 0, adjustX: 0 },
                    offset: [-10, 0],
                  }}
                  onVisibleChange={this.handleVisibleChange}
                  onSelect={this.onSelect}
                >
                  <div style={{
                    height: '100%',
                    padding: '0 15px',
                    marginRight: '-15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  >
                    <Icon type="ellipsis" />
                  </div>
                </Popover>
              }
            >
          </NavBar>
        </div>
      </div>
    );
  }
}

