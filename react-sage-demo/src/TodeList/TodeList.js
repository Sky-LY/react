import React, { Component } from 'react';

import TodeListUI from './TodeListUI'
import store from '../store'
import { inputChangeAction, addItemAction, deleteItemAction, getMyListAction } from '../store/actionCreators'

class TodeList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅store状态的改变

        this.inputChange = this.inputChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentDidMount(){
        this.getList()
    }
    render() { 
        return ( 
            <TodeListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                inputChange = {this.inputChange}
                addItem = {this.addItem}
                deleteItem = {this.deleteItem}
            />
         );
    }
    storeChange(){
        this.setState(
            store.getState()
        )
    }
    inputChange(e){
        let action = inputChangeAction(e.target.value)
        store.dispatch(action)
    }
    addItem(){
        let action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        let action = deleteItemAction(index)
        store.dispatch(action)
    }
    getList(){
        let action = getMyListAction()
        store.dispatch(action)
    }
}
 
export default TodeList;