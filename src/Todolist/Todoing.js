import React, { Component } from 'react';
//import PropTypes from 'prop-types'

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行</h1>
                <ul>
                    {
                        this.props.todo.map((item,index)=><li key={index}>{item}-----<button onClick={(e)=>{this.props.delTodo(index)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
// Todoing.PropTypes={
//     todo:PropTypes.array
// }
// Todoing.defaultProps={
//     todo:[1,2,3],
//     a:100
// }