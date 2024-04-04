'use client';

import Button from "@/app/components/Button";
import Card from "@/app/flashlite-components/Card";
import {useState} from "react";
import './Login.css';

const Login = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredBirthday, setEnteredBirthday] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const birthdayChangeHandler = (event) => {
        setEnteredBirthday(event.target.value);
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
            birthday: enteredBirthday,
            email: enteredEmail,
            password: enteredPassword,
        }

        if (!enteredUsername || !enteredPassword || !enteredEmail || !enteredBirthday) {
            alert('All fields required!')
        }
        props.onSignup(userData);
        setEnteredUsername('');
        setEnteredBirthday('');
        setEnteredEmail('');
        setEnteredPassword('');
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
                <label>Birthdate</label>
                <input
                    id="birthday"
                    type="date"
                    value={enteredBirthday}
                    onChange={birthdayChangeHandler}
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
                <Button type="submit">Sign up</Button>
            </form>
        </Card>
    )
}

export default Login;