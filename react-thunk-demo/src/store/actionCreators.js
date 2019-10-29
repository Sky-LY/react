import axios from 'axios'
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_ITEM } from "./actionType";

//TOdeList.js input值改变
export const inputChangeAction = (value) => ({
    type: INPUT_CHANGE,
    value
})

//TOdeList.js 添加服务
export const addItemAction = () => ({
    type: ADD_ITEM
})

//TodeList.js 删除服务
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

//TodeList.js 获取list数据
export const getListAction = (item) => ({
    type: GET_ITEM,
    item
})

//TodeList.js 请求list数据 
export const getTodeList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5d5a46ea4929443a9b2f73f7/ReactDemo01/getList')
        .then(res => {
            let result = res.data.data.list
            let action = getListAction(result)
            dispatch(action) 
        })
        .catch(err => {
            console.log(err)
        })
    }
}