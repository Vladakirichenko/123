import React from "react";
import './Input.css'

const Input = props => {
    return (
        <div>
            <input className={props.class} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;