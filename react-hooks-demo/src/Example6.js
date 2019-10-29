import React,{ useState,useMemo } from 'react';

const Example6 = () => {
    let [xiaohong, setXiaohong] = useState("小红")
    let [xiaolan, setXiaolan] = useState("小蓝")
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setXiaolan(new Date().getTime()+'，真的来了')}}>小蓝</button>
            <ChildCompenent name={xiaohong}>{xiaolan}</ChildCompenent>
        </>
    )
}

const ChildCompenent = ({name,children}) =>{
    const hehe = (name) => {
        return name+",我来了"
    }
    const actionXiaohong = useMemo(()=>hehe(name),[name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example6