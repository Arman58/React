import React from 'react';
import  Style from "./style.module.css";
import Menu from "./Menu/Menu";

function App() {  
      return(
        <div className={Style.container}>
         <Menu/>
        </div>
      )
    
}

export default App;