import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import "./style.css"

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            onShow: true
         }
         this.onShowChange = this.onShowChange.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in = {this.state.onShow}
                    timeout={2000}
                    classNames = 'boss-text'
                >
                   <div>Boss降临</div>
                </CSSTransition>
                <button onClick={this.onShowChange}>切换</button>
            </div>
         );
    }
    onShowChange(){
        this.setState({
            onShow: !this.state.onShow
        })
    }
}
 
export default Boss;