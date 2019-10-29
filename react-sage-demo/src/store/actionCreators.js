import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'

//TodeList.js input值得变化
export const inputChangeAction = (value) => ({
    type: INPUT_CHANGE,
    value
})

//TodeList.js 添加服务
export const addItemAction = () => ({
    type: ADD_ITEM
})

//TodeList.js 删除服务
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

//TodeList.js 获取list
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

//TodeList.js 请求list
export const getMyListAction = () => ({
    type: GET_MY_LIST
})