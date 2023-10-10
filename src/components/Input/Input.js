import React from "react";
import './Input.css'

const Input = props => {
    return (
        <div className="input-wrap">
            <input onChange={props.handler}  className={props.class} type={props.type} placeholder={props.placeholder} id={props.id}/>
        </div>
    )
}

export default Input;