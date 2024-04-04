'use client';

import Button from "@/app/components/Button";
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
            alert('enter username or email')
            setEnteredUsername('');
            setEnteredEmail('');
            setEnteredPassword('');
        }
        else if(!enteredPassword){
            alert('enter password')
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
        <Card className="input" >
            <div>
                <h3>Enter the following information</h3>
            </div>
            <form onSubmit = {submitHandler}>
                <label>Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <label>Email</label>
                <input
                    id="email"
                    type="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                />
                <label>Password</label>
                <input
                    id="password"
                    type="password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                />
                <Button type="submit">Login</Button>
            </form>
        </Card>
    )
}

export default Login;