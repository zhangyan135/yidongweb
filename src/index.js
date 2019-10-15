import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShowTime from './Showtime';
import Todolist from './Todolist/Todolist';
import Request from './zijian/Request'
// jsx表达式会被react转成一个对象，类似于下边的obj
// var ele=React.createElement('div',{'id':'box'},'hello', React.createElement(
//         'h1',
//         {'id':'h'},
//         'react'
//     )
// );
// React.createElement('h1',{'id':'h'},'react'));
//

//组件交互
//父组件-->子组件：调用时在子组件上添加属性
//在子组件中加入props获取数据

 //ReactDOM.render(<Todolist/>,document.getElementById('root'));
ReactDOM.render(<Request/>,document.getElementById('root'));

var obj={
    type:'div',
    props:{
        id:'box',
        class:'box',
        children:['hello', 
        {
            type:'h1',
            props:{
            id:'h',
            class:'h',
            children:['hi']
            }
        }
        ]
    }
}


// 加载HTML文件、浏览器解析HTML生成DOM树
// link加载css文件、解析css规则、生成render tree（渲染树）、浏览器渲染引擎渲染render tree


// 页面回流（重排）：内容改变、大小改变、结构改变
// 页面重绘：把字体颜色、背景颜色等样式改变

//node.offsetLeft、node.offsetWidth等慎用
// var root=document.getElementById('root');
// var width=root.offsetWidth;
// setInterval(function(){
//     width+=1;
//     root.style.width=width+'px';
// },100)

// display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 声明一个css的一个类
// .change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';

// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');

function render(obj,container){
    var {type,props}=obj;
    //文档碎片
    var fragment=document.createDocumentFragment();
    


    var ele=document.createElement(obj.type);
    for(var item in obj.props){
        if(item==='class'){
            ele.className=props[item];
        }else if(item==='children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i]==='object'){
                    render(props[item][i],ele);
                }else{
                var txt=document.createTextNode(props[item][i]);
                ele.appendChild(txt);
                }
            }
                
        }else{
            ele[item]=props[item];
        }
       
    }
    fragment.appendChild(ele);
    container.appendChild(fragment);
}


// //react元素创建后不可变
// function tick(){
//     var e=<div>
//         <p>当前时间</p>
//         <h1>{new Date().toLocaleString()}</h1>;       
//     </div>
//      ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);
// render(obj,document.getElementById('root'));



 
 
 



//var item='hello';
var str=[1,2,3,4,5];
//var str=[<li>1</li>,<li>2</li>,3,4,5];
//ReactDOM.render(  <Todo list={str}/>, document.getElementById('root') );
//ReactDOM.render(  <Todo list={item}/>, document.getElementById('root') );

// var str='hello';
// var ele=<h1>{str}</h1>;

//ReactDOM.render(ele, document.getElementById('root'));




// ReactDOM.render(<h1>你好</h1>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
