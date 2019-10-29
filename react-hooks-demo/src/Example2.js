import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Ponser{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    say(){
        return `Helllo! my name is ${this.name}. I am ${this.age} year old`
    }
}

const Home = () => {
    useEffect(()=>{
        let man = new Ponser("张三", 18)
        console.log(man.say())
        console.log("Home ==> I get this")
        return () =>{
            console.log("Home ==> I leave")
        }
    },[])
    return (
        <div>Home</div>
    )
}

const List = () => {
    useEffect(()=>{
        console.log("List ==> I get this")
    })
    return (
        <div>List</div>
    )
}

const Example2 = () => {
    const [ count, setCount ] = useState(0)
    useEffect(()=>{
        console.log(`useEffect ==> You click ${count} times`)
    },[count])
    return (
       <div>
           <p>You clicked {count} times</p>
           <button onClick={()=>setCount(count+1)}>click</button>
           <Router>
               <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/List/">List</Link></li>
               </ul>
               <Route path="/" exact component={Home}/>
               <Route path="/List/" component={List}/>
           </Router>
       </div>
    )
}

export default Example2