import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch,withRouter} from 'react-router-dom';
import Bottom from './Bottom';
import Topic from './Topic'
export default class Router extends Component {
    render() {
        return (
            <Router>
                <div style={{marginTop:1000}}>
                    <Bottom/>
                    <div>
                            <Route path='/topic/:page' component={Topic}/>
                    </div>
                </div>
            </Router>
        )
    }
}