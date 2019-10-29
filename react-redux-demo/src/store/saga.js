import { takeEvery, put } from 'redux-saga/effects'
import { REQUEST_LIST } from '../store/actionType'
import { getList } from '../TodoList/TodeListConnect'
import axios from 'axios'
function* mySaga () {
    yield takeEvery(REQUEST_LIST, requestList)
}
function* requestList(){
    let res = yield axios.get('https://www.easy-mock.com/mock/5d5a46ea4929443a9b2f73f7/ReactDemo01/getList')
    let item = res.data.data.list
    let action = getList(item)
    yield put(action)
}

export default mySaga