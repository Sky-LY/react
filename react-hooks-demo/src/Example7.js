import React,{ useRef,useState, useEffect } from 'react';

const Example7 = () => {
    let inputEL = useRef(null)
    let inputChange = ()=>{
        inputEL.current.value = '呵呵'
        console.log(inputEL.current.value)
    }
    let [text, setText] = useState("呵呵")
    let textRef = useRef()
    useEffect(() => {
        textRef.current = text
        console.log("textRef.current:", textRef.current)
    })
    return(
        <div>
            <input ref={inputEL} type="text" />
            <button onClick={inputChange}>添加</button>
            <br />
            <br />
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
    )
}

export default Example7