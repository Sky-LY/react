import React,{ useState, useCallback, useEffect } from 'react';

const useWinSize = () => {
    let [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[])
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return () =>{
            window.removeEventListener('resize',onResize)
        }
    },[])
    return size
}

const Example8 = () => {
    let size = useWinSize()
    return(
        <div>页面的尺寸是：{size.width}x {size.height}</div>
    )
}

export default Example8