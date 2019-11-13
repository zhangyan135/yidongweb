import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch,withRouter} from 'react-router-dom';

import ShowTime from './Showtime';
import Todolist from './Todolist/Todolist'
import Request from './zijian/Request';
import Parent from './context/Parent';
import Hoc from './HOC/Hoc';
import Sider from './Side';
import { Button } from 'antd';
import NoMatch from './NoMatch';
import UserInfor from './route/UserInfor';
import Topic from './zijian/Topic'
import Hooks from './Hooks';
// antd使用：
// 1、下载安装antd框架 ：npm i antd 
// 2、在某个css里引入antd的css：@import '~antd/dist/antd.css';
// 3、在需要的组件内import相应的组件，然后使用

//容器组件 / UI组件（展示组件）
//智能组件 / 木偶组件

//容器组件（pages、container）：写逻辑
//U/I组件（components）：展示，写函数组件，直接return react 元素

function Login(props){
    console.log(props);
    return <button>登录</button>
}
let LoginWithRouter=withRouter(Login);           //高阶组件的写法，一个函数传入的参数是一个组件，返回一个新的组件

export default class App extends Component {
    render() {
        // 所有路由的组件都得放在 BrowserRouter 里
        // BrowserRouter里只能有一个子元素
        return (
            <Router basename='todolist'>
                <div>
                    {/* <UserInfor /> */}
                    {/* <UserInfor /> */}
                    <Sider/>
                    {/* <Button type="primary">Primary</Button> */}
                    <LoginWithRouter />
                    {/* <Hooks /> */}
                    <div style={{marginLeft: 50,float: 'left',border: '2px solid red'}}>
                        <Switch>
                            <Route exact path='/' render={()=><Todolist/>}/>
                            <Route path='/hoc' component={Hoc} />
                            <Route path='/request' component={Request}/>
                            <Route path='/userinfor/:id' component={UserInfor}/>
                            <Route path='/topic/:page' component={Topic}/>
                            <Route path='/hooks/:id' component={Hooks}/>
                            {/* <Redirect path='/old' to='hoc'/> */}
                            <Route path='*' component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}