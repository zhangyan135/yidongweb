import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class Topic extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let index=this.props.match.params.item;
        console.log(index);
        fetch('https://cnodejs.org/api/v1/topics/?tab=good&&page='+index)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.item!==this.props.match.params.item){
             let page=this.props.match.params.item;
             fetch('https://cnodejs.org/api/v1/topics/?tab=good&&page='+page)
             .then((res)=>res.json())
             .then((res)=>{
             this.setState({data:res.data});
        })
        }
       
    }
    render() {
        let url=this.props.match.url;
        console.log(url);
        return (
            <div>
                <div>
                 <Route path={url+'/detail:index'} component={Topic}/>
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
                            <span><button style={{backgroundColor:'rgb(47, 161, 47)'}}>置顶</button></span>&nbsp;  
                            <Link to={url+'/detail'+index}>{item.title}</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{fontSize:10,float:'right'}}>1小时前</span>
                            <img style={{width:20,height:20,marginRight:10,float:'right'}} src={item.author.avatar_url} alt=''/>
                       </div>
                    </div>
                       <hr/>
                </li>
                   ))
               }
               
            </div>
        )
    }
}
