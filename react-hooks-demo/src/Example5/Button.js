import React,{ Fragment, useContext } from 'react';

import { UPDATE_COLOR, ColorContext } from './Color'

const Button = () => {
    let { dispatch } = useContext(ColorContext)
    return (
        <Fragment>
            <button onClick= {() => dispatch({color:'red',type:UPDATE_COLOR})}>红色</button>
            <button onClick= {() => dispatch({color:'green',type:UPDATE_COLOR})}>绿色</button>
        </Fragment>
    )
}

export default Button