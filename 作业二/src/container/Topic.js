import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let index=this.props.match.params.index;
        console.log(index);
        fetch('https://cnodejs.org/api/v1/topics?page='+index)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
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

