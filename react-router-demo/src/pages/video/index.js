import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './style.css'

import Node from './node'
import Vue from './Vue'
import Flutter from './Flutter'

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="video-box">
                <h2>I am Video</h2>
                <ul>
                    <li><Link to="/Video/">Vue</Link></li>
                    <li><Link to="/Video/Flutter">Flutter</Link></li>
                    <li><Link to="/Video/Node">node</Link></li>
                </ul>
                <div style={{marginTop: "30px"}}>
                    <Route path="/Video/" exact component={Vue}></Route>
                    <Route path="/Video/Flutter" component={Flutter}></Route>
                    <Route path="/Video/Node" component={Node}></Route>
                </div>
            </div>
           
         )
    }
}
 
export default Video;