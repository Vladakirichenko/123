import React from "react";
import './Card.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import img from "../../assets/logo.png";
import {IoEyeSharp} from 'react-icons/io5';

const Card = () => {
    return (
        <div className="card">
            <div className="card-wrap">
                <a className="logo"><img src={img}/></a>
                <Input type='text' placeholder='User name' class='input'/>
                <div className="input-wrap">
                    <Input type='password' placeholder='Password' class='input'/>
                    <IoEyeSharp className="input-icon"/>
                </div>
                <Button name='Login'/>
            </div>
        </div>
    )
}

export default Card;