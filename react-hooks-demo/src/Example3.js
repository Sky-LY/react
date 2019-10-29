import React,{ useState, createContext ,useContext } from 'react';

let countContext = createContext()

const Counter = () => {
    let _count = useContext(countContext)
    return(
        <h2>{_count}</h2>
    )
}

const Example3 = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click</button>
            <countContext.Provider value={count}>
                <Counter/>
            </countContext.Provider>
        </div>
    )
}

export default Example3