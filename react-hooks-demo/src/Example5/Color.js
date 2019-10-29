import React,{ createContext,useReducer } from 'react';

export const ColorContext = createContext()

export const UPDATE_COLOR = 'UPDATE_COLOR'

const Reducer = (start, action) => {
    switch (action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return start
    }
}
export const Color = props =>{
    const [color, dispatch ] = useReducer(Reducer,'blue')
    return(
        <ColorContext.Provider value={{color, dispatch}}>
            { props.children }
        </ColorContext.Provider>
    )
}