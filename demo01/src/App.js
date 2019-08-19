import React,{Component} from 'react'

class App extends Component{
    render(){
        // var chart1 = React.createElement('li',null,"哈哈")
        // var chart2 = React.createElement("li",null,"嘻嘻")
        // var root = React.createElement("ul",{className:'my-ul'},chart1,chart2)
        return(
            <ul className="my-ul">
                <li>{false ? "hehe" : "呵呵"}</li>
                <li>two</li>
            </ul>
        )
    }
}

export default App
