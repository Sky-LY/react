import React,{ useReducer } from 'react'

const Example4 = () => {
    let [count, dispatch ] = useReducer((state, action)=>{
        switch (action){
            case 'add':
                return state +1;
            case 'sub':
                return state -1;
            default:
                return state;
        }
    },0)
    return(
        <div>
            <h3>You click {count} times</h3>
            <button onClick={()=> dispatch('add')}>Increase</button>
            <button onClick={()=> dispatch('sub')}>Decrease</button>
        </div>
    )
}

export default Example4