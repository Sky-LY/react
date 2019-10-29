import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import TodeList from './TodeList/TodeList'

const App = (
    // 提供器
    <Provider store={store}>
        <TodeList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'))