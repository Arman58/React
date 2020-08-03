import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Home";
import Clock from "./Clock";
import Nav from "./Nav";

const Menu = () => {

    return(
            <Router>
        <div>
                 <Nav/> 
                    <Route exact  path="/" component={Home}/>             
                    <Route path="/clock" component={Clock}/>             
        </div>
            </Router>
    )
}

export default Menu