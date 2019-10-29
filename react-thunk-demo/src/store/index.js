import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './reducer'
import thunk from 'redux-thunk'
//安装了中间件才可以返回函数，不认只能返回对象
// 增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancers = composeEnhancers(applyMiddleware(thunk))

const store = createStore(Reducer,enhancers)

export default store