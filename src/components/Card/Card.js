import {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import img from "../../assets/logo.png";
import {IoEyeSharp, IoEyeOffSharp} from 'react-icons/io5';

const data = {
    password: 'password',
    email: 'vlada@gmail.com'
}

const Card = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [className, setClassName] = useState('input-wrap')
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const loginUser = (e) => {
        e.preventDefault()
        if (email == data.email && password == data.password) {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIs')
            navigate('/ProductsTable')
        } else {
            setClassName('input-wrap error')
        }
        
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value) {
            setClassName('input-wrap')
        } 
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value) {
            setClassName('input-wrap')
        } 
    }

    return (
        <div className="card">
            <div className="card-wrap">
                <form className="form">
                    <a className="logo"><img src={img}/></a>
                    <div className={className}>
                        <Input handler={handleChangeEmail} type='text' placeholder='User name' class='input' id='email'/> 
                    </div>
                    <div className={className} >
                        <Input handler={handleChangePassword} type={isPasswordShown ? 'text' : 'password'} placeholder='Password' class='input' id='password'/>
                        <small className="error-massage">Wrong password or email</small>
                        {!isPasswordShown
                            ? <IoEyeSharp onClick={() => setIsPasswordShown(true)} className="input-icon"/> 
                            : <IoEyeOffSharp onClick={() => setIsPasswordShown(false)} className="input-icon"/>}   
                    </div>
                    <Button login={loginUser} name='Login'/>
                </form>
            </div>
        </div>
    )
}

export default Card;