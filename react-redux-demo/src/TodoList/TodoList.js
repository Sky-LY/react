import React, {Component}from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

import {stateToprops, dispatchToprops} from './TodeListConnect'
import "./style.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.props.requestList() 
    }
    render() { 
        var { inputValue, list, inputChange, addItem, deleteItem } = this.props
        return (
            <div className="box">
                <div className="f1">
                    <Input 
                        placeholder="Write Something" 
                        className="input"
                        value={inputValue}
                        onChange = {inputChange}
                    />
                    <Button type="primary" onClick={addItem}>Primary</Button>
                </div>
                <div className="f2">
                    <List
                        bordered
                        dataSource={list}
                        renderItem = {(item, index) => (
                            <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>
                        )}
                     />
                </div>
            </div>
        )
    }
}
// 无状态组件 提高性能
// const TodoList = (props) => {
//     let { inputValue, list, inputChange, addItem, deleteItem, requestList } = props
//     useEffect(() => {
//         requestList()
//     })
//     return (
//         <div className="box">
//             <div className="f1">
//                 <Input 
//                     placeholder="Write Something" 
//                     className="input"
//                     value={inputValue}
//                     onChange = {inputChange}
//                 />
//                 <Button type="primary" onClick={addItem}>Primary</Button>
//             </div>
//             <div className="f2">
//                 <List
//                     bordered
//                     dataSource={list}
//                     renderItem = {(item, index) => (
//                         <List.Item onClick={() => deleteItem(index)}>{item}</List.Item>
//                     )}
//                  />
//             </div>
//         </div>
//     )
// }
// 连接器
export default connect(stateToprops, dispatchToprops)(TodoList)