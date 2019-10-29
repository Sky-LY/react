import React,{ useState } from 'react';

const Example = () => {
    const [count, setCount] = useState(0)
    const [age] = useState(18)
    const [name] = useState("张三")
    return (
        <div>
            <p>My name is {name}, I am {age} year old</p>
            <h3>You clicked {count} times</h3>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
}

export default Example