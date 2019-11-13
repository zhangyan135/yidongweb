import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: [1,2,3]
        }

        // 深拷贝
        // var arr=[1,2,{a:100}];
        // //var b=[...arr];
        // var b=JSON.parse(JSON.stringify(arr));
        // b[2].a=200;
        // console.log(arr);


        //对象的拷贝
        var a={a:100};
        var b={b:200};     //如果也是a，则后一个值覆盖前一个值
        var o=Object.assign(a,b);   //加花括号生成一个新的对象（目标对象）
        console.log(o);

        // var a={a:100};
        // var o=Object.assign({},a);
        // console.log(o===a);
        // console.log(o);

        //Object.keys返回由属性名组成的一个数组
        Object.keys(a).forEach((item)=>{
            console.log(item);
            console.log(a[item]);
        })

        // for(var item in a){
        //     console.log(a);
        // }                        性能不好，尽量不用



    }
    addItem = (msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg);
    }
    delItem = (a)=>{
        // this.state.todo.splice(a,1);
        //深拷贝\浅拷贝
        //状态（state）：1、不要直接改变、处理状态
       

        // 浅拷贝
        var todo=[...this.state.todo];
        todo.splice(a,1);
         // 2、setState是异步的
         this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({todo})

        
        // this.setState({           
        //     todo:todo
        // })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo}  delTodo={this.delItem}/>
            </div>
        )
    }
}