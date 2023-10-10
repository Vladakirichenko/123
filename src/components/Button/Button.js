import React from "react";
import './Button.css'

const Button = ({login, name}) => {
    return (
        <div className="button-wrap">
            <button className="btn" onClick={login}>
                {name}
            </button>
        </div>
    )
}

export default Button;