import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import All from './All';
import Good from './Good';
import Share from './Share';
import Job from './Job';
import Question from './Question'

export default class Home extends Component {
    render() {
        let url=this.props.match.url
        return (
            <div>
                <div className="first">
                    <Link style={{color:'green',fontSize:20}} to={url+'/all'}>全部</Link>&nbsp;&nbsp;&nbsp;
                    <Link style={{color:'green',fontSize:20}} to={url+'/good'}>精华</Link> &nbsp;&nbsp;&nbsp;
                    <Link style={{color:'green',fontSize:20}} to={url+'/share'}>分享</Link>&nbsp;&nbsp;&nbsp;
                    <Link style={{color:'green',fontSize:20}} to={url+'/job'}>招聘</Link>&nbsp;&nbsp;&nbsp;
                    <Link style={{color:'green',fontSize:20}} to={url+'/question'}>问答</Link>&nbsp;&nbsp;&nbsp;
                    <Link style={{color:'green',fontSize:20}} to={url+'/test'}>客户端测试</Link>
                </div>
                <div className="link">                    
                    <Route path={url+'/all'} component={All}/>
                    <Route path={url+'/good'} component={Good}/>
                    <Route path={url+'/share'} component={Share}/>
                    <Route path={url+'/job'} component={Job}/>
                    <Route path={url+'/question'} component={Question}/>
                </div>
            </div>
        )
    }
}
