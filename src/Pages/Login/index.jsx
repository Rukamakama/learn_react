import React, {useContext} from 'react';
import './index.css'
import Title, {SIZE_SMALL} from '../../Components/Title';
import {
    STR_LOGIN,
    STR_USERNAME, STR_PASSWORD
} from '../../Constants/strings'
import {LoginContext} from "../../Contexts/LoginContext";

const Login = () => {
    const {
        username, password, onUserLogin,
        onUsernameChange, onPasswordChange,
    } = useContext(LoginContext)

    return (
        <div className='loginForm'>
            <Title text={STR_LOGIN} size={SIZE_SMALL}/>
            <form onSubmit={onUserLogin}>
                <div className='loginInputs'>
                    <label htmlFor={STR_USERNAME} className='htmlFor'> {STR_USERNAME} </label>
                    <input type='text' value={username} name={STR_USERNAME} id={STR_USERNAME}
                           onChange={onUsernameChange}
                           placeholder='username' required/>

                    <label htmlFor={STR_PASSWORD} className='htmlFor'> {STR_PASSWORD} </label>
                    <input value={password} name={STR_PASSWORD} id={STR_PASSWORD}
                           onChange={onPasswordChange}
                           placeholder='password' required/>
                    <button className='btnPost'>{STR_LOGIN}</button>
                </div>
            </form>
        </div>
    );
};

export default Login;