import React,{ useContext,useEffect } from 'react';
import { ColorContext } from './Color'

const ShowArea = ()=>{
    let {color}= useContext(ColorContext)
    return (
        <h3 style={{color:color}}>这字体是蓝色的</h3>
    )
}

export default ShowArea