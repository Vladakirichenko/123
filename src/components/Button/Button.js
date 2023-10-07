import React from "react";
import './Button.css'

const Button = props => {
    return (
        <div className="button-wrap">
            <button className="btn" onClick={props.login}>
                {props.name}
            </button>
        </div>
    )
}

export default Button;