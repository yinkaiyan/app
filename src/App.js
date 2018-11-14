import React, { Component } from 'react';

import {HashRouter as Router ,withRouter,Route} from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css';
//广告
import loding from './page/lodingPage';
//主页
import home from './page/home/index';
//饭票
import ticket from './page/ticket/index';
//更多
import more from './page/single/more';
//图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

import { faCoffee,faStar,faCreditCard,faSquare,faCompass,faUser,faPodcast,faHeartbeat} from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee,faStar,faCreditCard,faSquare,faCompass,faUser,faPodcast,faHeartbeat);

const style={
 
};

class App extends Component {
  render() {
    return (
      <div>
          {/* 广告 */}
          <Router>
            <div>
              <Route path={'/'} component={loding}></Route>
            </div>
          </Router>
          {/* 主页 */}
          <Router>
            <div>
              <Route path={'/home'} component={home}></Route>
            </div>
          </Router>
          {/* 饭票 */}
          <Router>
            <div>
             <Route path={'/ticket'} component={ticket}></Route>
            </div>
          </Router>
          {/* 更多活动 */}
          <Router>
            <div>
             <Route path={'/more'} component={more}></Route>
            </div>
          </Router>
      </div>
    );
  }
}
export default App;
