import React, { Component } from 'react'

export default class Todoing extends Component {
    constructor(){
        super();
        this.state = {
            td:[1,2]
        }
    }
    render() {
                return (
                    <div>
                         
                        <h1>正在进行 {this.props.todo.length}</h1>
                        
                        <ul className="list">
                            {
                                this.props.todo.map((item,index)=><p key={index}><input id='inp' 
                                type="checkbox" onChange={(e)=>{this.props.addDid(item,index)}}/>
                                {item}-------<button onClick={(e)=>{this.props.delTodo(index)}}>删除</button></p>)
                            }
                        </ul>
                        
                        <h1>已经完成 {this.props.todone.length}</h1>
                        <ul>
                            {
                              this.props.todone.map((item,index)=><p key={index}><input id='inp' 
                              type="checkbox" onChange={(e)=>{this.props.pullDid(item,index)}}/>
                              {item}-------<button onClick={(e)=>{this.props.delDid(index)}}>删除</button></p>)
                            }
                        </ul>
                       
                     </div>

                )
            }
    }
