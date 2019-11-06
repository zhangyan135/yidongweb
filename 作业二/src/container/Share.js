import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

import Detail from './Detail'
export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
   componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/?tab=share').then((res)=>{
                console.log(res);  
                return res.json();  
        }).then((res)=>{
            this.setState({
                data:res.data
            })
            console.log(res);
        })
    }
    render() {
        let url=this.props.match.url
        console.log(this.state.data)
        return (         
            <div className='list'>    
            <ul>
            <div>
                 <Route path={url+'/detail'} component={Detail}/>
              </div>
                {
                  this.state.data.map((item,index)=>(
                    <li key={index}>
                     <div style={{width:1000}}>
                        <div style={{width:60}}>
                            <img style={{width:30,height:30}} src={item.author.avatar_url} alt=''/>&nbsp;&nbsp;
                             <span>{item. reply_count}/</span>                           
                             <span>{item.visit_count}</span>&nbsp;&nbsp;
                        </div>
                        <div style={{width:860,float:'right',marginTop:-30}}>
                             <span><button style={{backgroundColor:'rgb(47, 161, 47)'}}>分享</button></span>&nbsp;  
                             <Link to=''>{item.title}</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                             <span style={{fontSize:10,float:'right'}}>1小时前</span>
                             <img style={{width:20,height:20,marginRight:10,float:'right'}} src={item.author.avatar_url} alt=''/>
                        </div>
                     </div>
                        <hr/>
                 </li>
               ))
            }
             <div className='page'>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                         <li style={{float:'left'}} key={item}><Link to={'/topic/'+item}>{item}</Link></li>
                     ))              
                }
           </div> 
           </ul> 
       </div>
        )
    }
}