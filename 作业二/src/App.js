import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Sider from './container/Sider';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Sider />
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                        </div>
                        <div className="sider">

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}