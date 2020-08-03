import React, { Component } from "react";

class Clock extends Component{

    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    
    tick(){
        this.setState({
            date:new Date()
        })
    }
    
    componentDidMount(){
        const timerID = setInterval(
            () => this.tick()
        )
    }

    componentWillUnmount(){
        clearInterval()
    }

    render(){
        const {date} = this.state
        return(
            <div>
                <h1>Now is a {date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock