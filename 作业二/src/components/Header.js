import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Login from '../container/Login';

export default class Header extends Component {
    render() {
    return (
        <div className='headerwrap'>
            <header>
                    <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                    <input type='text' placeholder="input"/>
                <div style={{float:'right',lineHeight:'50px'}}>
                    <Link to='/home'>首页</Link>
                    <Link to='/start'>新手入门</Link>
                    <Link to='/api'>API</Link>
                    <Link to='/about'>关于</Link>
                    {/* <Link to='/signUp'>注册</Link> */}
                    <Link to='/login'>登录</Link>
                </div>
                <div className="link1">                    
                    <Route path='/login' component={Login}/>
                </div>
            </header>
        </div>
    )
} 
}