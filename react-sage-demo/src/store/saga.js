import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'

// generator函数【生成器函数】
function* mySage () {
    // 等待捕获aciton
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList() {
    let result = yield axios.get('https://www.easy-mock.com/mock/5d5a46ea4929443a9b2f73f7/ReactDemo01/getList')
    let action = getListAction(result.data.data.list)
    yield put(action)
}

export default mySage