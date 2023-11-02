import React from "react";
import './BtnGhost.css'

const BtnGhost = props => {
    return (
        <div onClick={props.action} className="btn-wrap">
            <button className="btnGhost">
                {props.icon}
                {props.name}
            </button>
        </div>
    )
}

export default BtnGhost;