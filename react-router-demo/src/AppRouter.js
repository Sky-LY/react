import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './pages/home'
import './pages/home/style.css'
import Video from './pages/video'
import Text from './pages/text'


class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            routeConfig:[
                {path:'/' ,title: "网站首页", exact:true, component:Home},
                {path:'/Video' ,title: "视频教程", exact:false, component:Video},
                {path:'/Text' ,title: "文字教程", exact:false, component:Text},
            ]
         }
    }
    render(){
        return (
            <Router>
                <div className="box">
                    <div className="leftNav">
                        <h2>一级导航</h2>
                        <ul>
                            {
                                this.state.routeConfig.map((item,index) => {
                                    return(
                                        <li key={index}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="rightMain">
                        {
                            this.state.routeConfig.map((item, index) => {
                                return (
                                    <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                                )
                            })
                        }
                    </div>
                </div>
            </Router> 
        )
    }
}

export default AppRouter