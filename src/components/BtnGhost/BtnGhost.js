import React from "react";
import './BtnGhost.css'
import {IoPersonOutline, IoAdd} from 'react-icons/io5'

const BtnGhost = props => {
    return (
        <div className="btn-wrap">
            <button className="btnGhost">
                {props.icon}
                {props.name}
            </button>
        </div>
    )
}

export default BtnGhost;