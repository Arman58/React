import React, { Component } from "react";

class BlurExample extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen:false
        }
        this.toggleContainer = React.createRef();

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
    
    componentDidMount(){
      window.addEventListener('click',this.onClickOutsideHandler)
    }
    
    componentWillUnmount(){
      window.addEventListener('click',this.onClickOutsideHandler)
    }

    onClickHandler(){
      this.setState(currentState=>({
          isOpen:!currentState.isOpen
      }))
    }

    onClickOutsideHandler(event){
     if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
         this.setState({isOpen:false})
     }
    }

    render(){
        return(
            <div ref={this.toggleContainer}>
            <button onClick={this.onClickHandler}>Select an option</button>
            {this.state.isOpen && (
                <ul>
                    <li>option 1</li>
                    <li>option 2</li>
                    <li>option 3</li>
                </ul>
            )}
        </div>
    )
}
}

export default BlurExample