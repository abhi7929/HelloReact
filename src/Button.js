import React from "react"
import "./style.css"
const Button=({buttonText})=>{
    return(
        <div className="content" style={{textAlign : "center"}}>
            <button className="button">{buttonText}</button>
        </div>
        
    )
}

export default Button