import React, { Component } from 'react'
import All from './All';
import {Link,Route} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='login'>
                 <input type='text' placeholder='请输入用户名'/><br/>
                 <input type='text' placeholder='请输入密码' /><br/>
                 <Link to='/home/all'><button className='btn'>登录</button></Link>
               </div>
               <div>
                   <Route path='/home/all' component={All}/>
               </div>
            </div>
           
        )
    }
}
