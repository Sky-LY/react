import React, { Component,Fragment } from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import XiaojiejieItem from './XiaojiejieItem';
import Boss from './Boss'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue:'',
            list:[]
         }
         this.inputChanger = this.inputChanger.bind(this)
         this.addList = this.addList.bind(this)
         this.deleteList = this.deleteList.bind(this)
    }
    componentDidMount(){
        this.getList()
    }
    render() { 
        return ( 
            <Fragment>
                <span>服务项目：</span>
                <input value={this.state.inputValue} onChange={this.inputChanger} ref={(input) => {this.input = input}}></input>
                <button onClick={this.addList}>添加服务</button>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index) => {
                                return (
                                    <CSSTransition  
                                        key={item+index}
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                    >
                                        <XiaojiejieItem 
                                            content={item} 
                                            index={index} 
                                            deleteList={this.deleteList}/>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss/>
            </Fragment>
         );
    }
    // 获取list数据
    getList(){
        let that = this
        axios.get('https://www.easy-mock.com/mock/5d5a46ea4929443a9b2f73f7/ReactDemo01/getList')
            .then(res => {
                that.setState({
                    list: res.data.data.list 
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    // input改变
    inputChanger(e){
        this.setState({
            inputValue: this.input.value
        })
    }
    // 添加服务
    addList(){
        let that = this;
        let _list = that.state.list;
        _list = [...that.state.list, that.state.inputValue]
        that.setState({
            list: _list,
            inputValue: ''
        })
    }
    // 删除list
    deleteList(index){
        let that = this;
        let _list = that.state.list
        _list.splice(index,1)
        that.setState({
            list: _list
        })
    }
}
 
export default Xiaojiejie;