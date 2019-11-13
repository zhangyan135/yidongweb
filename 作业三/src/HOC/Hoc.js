import React, { Component } from 'react'
let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';

// 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件 
function hoc(Com,url,title){
    class A extends Component{
        constructor(){
            super();
            this.state = {
                data: []
            }
        }
        componentDidMount(){
            fetch(url)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                this.setState({
                    data: res.result
                })
            })
        }
        render(){
            return (
                <div>
                    <h1>{title}</h1>
                    <Com {...this.props} data={this.state.data} />
                </div>
            )
        }
    }
    A.displayName='A('+getDisplayName(Com)+')';
    // A.displayName=`A(${getDisplayName(Com)})`;

    return A;
}
//如果传入高阶组件
function getDisplayName(Com){
    return Com.displayName||Com.name||'Component';
}

class Music extends Component{
    render(){
        return <ul>
            <div>{this.props.name}</div>
            {
                this.props.data.map((item,idx)=>{
                    return <li key={idx}>{item.title}</li>
                })
            }
        </ul>
    }
}
class Music1 extends Component{
    render(){
        return <ul>
            {
                this.props.data.map((item,idx)=>{
                    return (<div>
                            <p key={idx}>{item.title}</p>
                            <p key={idx}>{item.author}</p>
                        </div>
                    )
                })
            }
        </ul>
    }
}
var Mymusic = hoc(Music,url,'第一个');
var Mymusic1 = hoc(Music1,url,'第二个');

export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Mymusic name='aa'/>
                <Mymusic1/>
            </div>
        )
    }
}