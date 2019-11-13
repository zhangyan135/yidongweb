import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Portals extends Component {
    cli=()=>{
        console.log('click');
    }
    render() {
        return (
            ReactDOM.createPortal(
                <div onClick={this.cli}> {this.props.children} </div>,
                document.getElementById('root')              
            )
            
        )
    }
}
