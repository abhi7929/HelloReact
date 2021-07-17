import React from "react"
import "./style.css"
import Button from "./Button"

const Hello=()=>{
    return(
     <div>
         <div className="header">
             <h1>Hello React!!</h1>
             <p>This is my first Project</p>
         </div>
        {/* <h1 style={{textAlign : "center"}}>Hello world</h1> */}
         <Button buttonText="Explore" />
        {/* <Button buttonText="Guava"/>
        <Button buttonText="Orange"/>        */}
     </div>
    )
}

export default Hello