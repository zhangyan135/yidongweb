import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
           data:'TodoList'
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <label style={{
                    color:'red',
                    fontSize:20
                    }} 
                    htmlFor="inp">输入：</label>
                <input id="inp" name="n1" onChange={this.handleChange} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}