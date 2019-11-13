import React, { Component } from 'react'
import Item from 'antd/lib/list/Item';

export default class Topic extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page=this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    // shouldComponentUpdate(){

    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
             let page=this.props.match.params.page;
             fetch('https://cnodejs.org/api/v1/topics?page='+page)
             .then((res)=>res.json())
             .then((res)=>{
             this.setState({data:res.data});
        })
        }
       
    }
    
    render() {
        return (
            <div>
               {
                   this.state.data.map((item)=>(
                       <div style={{width:800,overflow:"scroll"}} dangerouslySetInnerHTML={{__html:item.content}}></div>
                      // <div style={{width:800,height:800,overflow:"scroll"}} dangerouslySetInnerHTML={{__html:item.title}}></div>
                   ))
               }
            </div>
        )
    }
}

