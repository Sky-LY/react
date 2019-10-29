import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './saga'

//创建saga中间件
const sageMiddleware = createSagaMiddleware()
// 增强函数
const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancers = conposeEnhancers(applyMiddleware(sageMiddleware))


const store = createStore(reducer,enhancers)
sageMiddleware.run(mySaga)

export default store