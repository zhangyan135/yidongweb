import React, { Component } from 'react';


export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
   componentDidMount(){
    let page=this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topic_collect/alsotang').then((res)=>{
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
        var data=this.state.data;
        console.log(data);
        return (         
            <ul>
            {
                this.state.data.map((item,index)=>(
                    <li key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                    </li>
               ))
             }
            </ul> 
        
        )
    }
}