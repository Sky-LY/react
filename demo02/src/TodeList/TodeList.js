import React from 'react';
import { connect } from 'react-redux'

const TodeList = (props) => {
    let { inputValue, inputChange, addItem, list, deleteItem } = props
    return ( 
        <div>
            <div>
                <input 
                    placeholder="Write Something" 
                    value={inputValue}
                    onChange = {inputChange}
                />
                <button onClick={addItem}>添加服务</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <div key={item+index} onClick={() => deleteItem(index)}>{item}</div>
                        )
                    })
                }
            </ul>
        </div>
       
     );
}

// 映射关系
const stateToprops = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToprops = (dispatch) => {
    return {
        inputChange(e){
            let action = {
                type:"inputChange",
                value: e.target.value
            }
            dispatch(action)
        },
        addItem(){
            let action = {
                type:"addItem"
            }
            dispatch(action)
        },
        deleteItem(index){
            let action = {
                type: "deleteItem",
                index
            }
            dispatch(action)
        }
    }
}
// 连接器
export default connect(stateToprops, dispatchToprops)(TodeList);