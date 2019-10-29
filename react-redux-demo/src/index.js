import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import TodoList from './TodoList/TodoList'

// 创建提供器
const App =(
    <Provider store = {store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById("root"))