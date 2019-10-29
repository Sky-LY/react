
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_LIST, REQUEST_LIST } from '../store/actionType'
// 映射关系
export const stateToprops = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
export const dispatchToprops = (dispatch) => {
    return {
        // input值改变
        inputChange(e){
            let action = {
                type: INPUT_CHANGE,
                value: e.target.value
            }
            dispatch(action)
        },
        // 添加服务
        addItem(){
            let action = {
                type: ADD_ITEM
            }
            dispatch(action)
        },
        // 删除服务
        deleteItem(index){
            let action = {
                type: DELETE_ITEM,
                index
            }
            dispatch(action)
        },
        // 请求list
        requestList(){
            console.log(1)
            let action = {
                type: REQUEST_LIST
            }
            dispatch(action)
        }
    }
}
 // 获取list
 export const getList = (item) => ({
    type: GET_LIST,
    item
})