'use client';

import Button from "@/app/flashlite-components/Button";
import Card from "@/app/flashlite-components/Card";
import {useState} from "react";
import './Login.css';

const Login = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            id: Math.random().toString(),
            username: enteredUsername,
            email: enteredEmail,
            password: enteredPassword,
        }

        if (!enteredUsername && !enteredEmail){
            alert('Username or email required!')
            setEnteredUsername('');
            setEnteredEmail('');
            setEnteredPassword('');
        }
        else if(!enteredPassword){
            alert('Password required!')
            setEnteredUsername('');
            setEnteredEmail('');
            setEnteredPassword('');
        }
        else{
            props.onLogin(userData);
            setEnteredUsername('');
            setEnteredEmail('');
            setEnteredPassword('');
        }
    };

    return (
        <div className="container">
            <div className="form">
                <p className="message">Enter the following information</p>
                <Card className="input">
                    <form onSubmit={ submitHandler }>
                        <label>Username</label>
                        <input
                            id="username"
                            type="text"
                            value={ enteredUsername }
                            onChange={ usernameChangeHandler }
                        />
                        <p>OR</p>
                        <label>Email</label>
                        <input
                            id="email"
                            type="email"
                            value={ enteredEmail }
                            onChange={ emailChangeHandler }
                        />
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            value={ enteredPassword }
                            onChange={ passwordChangeHandler }
                        />
                        <Button type="submit" className="login">Login</Button>
                    </form>
                </Card>
            <Button type="button" className="redirect">Don't have an account? Sign up!</Button>
            </div>
            <div className="slogan">
                <h1>Shine brighter with FlashLITE:</h1>
                <h1>Illuminate your learning journey!</h1>
            </div>
        </div>
    )
}

export default Login;