import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

// 创建saga中间件
// 中间件——-在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由
const sagaMiddleware = createSagaMiddleware()
// 增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose;
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancers)

// 运行sage
sagaMiddleware.run(mySaga)

export default store