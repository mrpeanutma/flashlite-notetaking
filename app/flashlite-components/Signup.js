'use client';

import Button from "@/app/flashlite-components/Button";
import Card from "@/app/flashlite-components/Card";
import {useState} from "react";
import './css/Signup.css';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Signup = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredBirthday, setEnteredBirthday] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const router = useRouter();


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
        router.push('/logged-in');
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
                        <label>Birthday</label>
                        <input
                            id="birthday"
                            type="date"
                            value={ enteredBirthday }
                            onChange={ birthdayChangeHandler }
                        />
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
                        <Button type="submit" className="signup">Sign up</Button>
                    </form>
                </Card>
                <Link href='/login'> 
                    <Button type="button" className="redirect">Already have an account? Log in!</Button>
                </Link>
            </div>
            <div className="slogan">
                <h1>Shine brighter with FlashLITE:</h1>
                <h1>Illuminate your learning journey!</h1>
            </div>
        </div>
    )
}

export default Signup;