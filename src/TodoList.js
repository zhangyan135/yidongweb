import React, { Component } from 'react';
import Todoing from './Todoing';
import TodoInput from './TodoInput';

export default class Finish extends Component {
    constructor(){
        super();
        // localStorage.setItem('todo',JSON.stringify(todo));
        // todo= JSON.parse(localStorage.getItem('todo'));
        this.state = {               
            todo:JSON.parse(localStorage.getItem('todo')||'[]'),
            todone: JSON.parse(localStorage.getItem('todone')||'[]')
        }
    }
    addItem = (msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        },()=>{
           localStorage.setItem('todo',JSON.stringify(this.state.todo));
        })   
    }
    delItem = (a)=>{
        var todo=[...this.state.todo];
        todo.splice(a,1);
        this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({todo},()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
        })
    }
    delDid=(ev)=>{
        var todone=[...this.state.todone];
        todone.splice(ev,1);
        this.setState((state,props)=>({todone:state.todone+1}))
        this.setState({todone},()=>{
            localStorage.setItem('todone',JSON.stringify(this.state.todone));
        })
    }
    pullItem=(msg,a)=>{
       var todo=[...this.state.todo];
       var todone=this.state.todone;
       todo.splice(a,1);
       this.setState((state,props)=>({todo:state.todo+1}))
       this.setState({
            todo:todo,
            todone:[...this.state.todone,msg]
       },()=>{
        localStorage.setItem('todo',JSON.stringify(this.state.todo));
        localStorage.setItem('todone',JSON.stringify(this.state.todone));
       })
    }
    pullItemed=(msg,a)=>{
        var todo=[...this.state.todo];
        var todone=this.state.todone;
        todone.splice(a,1);
        this.setState((state,props)=>({todone:state.todone+1}))
        this.setState({
             todone:todone,
             todo:[...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
            localStorage.setItem('todone',JSON.stringify(this.state.todone));
        })
    }
    render() {
        return (
            <div>
                <TodoInput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} todone={this.state.todone} addCount={this.addCount} load={this.onload}
                 delTodo={this.delItem}  addDid={this.pullItem} delDid={this.delDid} pullDid={this.pullItemed}/>
            </div>
        )
    }
}
