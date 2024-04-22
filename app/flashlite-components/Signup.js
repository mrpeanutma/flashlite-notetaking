'use client';

import {useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Button from "@/app/flashlite-components/Button";
import Card from "@/app/flashlite-components/Card";
import './css/Signup.css';
import Link from 'next/link';

const Signup = (props) => {

    const router = useRouter();
    const {userData, setUserData} = useContext(UserContext);

    const [enteredData, setEnteredData] = useState ({
        username: '',
        birthday: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const changeHandler = (event) => {
        setEnteredData({
            ... enteredData,
            [e.target.name]: e.target.value,
        });
    };

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredBirthday, setEnteredBirthday] = useState('');
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const birthdayChangeHandler = (event) => {
    //     setEnteredBirthday(event.target.value);
    // }

    // const emailChangeHandler = (event) => {
    //     setEnteredEmail(event.target.value);
    // }

    // const passwordChangeHandler = (event) => {
    //     setEnteredPassword(event.target.value);
    // }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {

            if (!enteredData.username || !enteredData.birthday || !enteredData.email || ! enteredData.password) {
                alert('All fields required!');
            } else {
                await axios.post('http://localhost:8085/signup', enteredData);
                const loginResponse = await axios.post('http://localhost:8085/login', {
                    username: enteredData.username,
                    email: enteredData.email,
                    password: enteredData.password
                });

                setUserData({
                    token: loginResponse.data.token,
                    user: loginResponse.data.user,
                });

                localStorage.setItem("auth-token", loginResponse.data.token);
                router.push('/');
            }

        } catch (error) {
            console.error('Signup Failed:', error);
            //Handle Signup Error
        }

        // const userData = {
        //     id: Math.random().toString(),
        //     username: enteredUsername,
        //     birthday: enteredBirthday,
        //     email: enteredEmail,
        //     password: enteredPassword,
        // }

        // if (!enteredUsername || !enteredPassword || !enteredEmail || !enteredBirthday) {
        //     alert('All fields required!');
        // }
        // props.onSignup(userData);
        // setEnteredUsername('');
        // setEnteredBirthday('');
        // setEnteredEmail('');
        // setEnteredPassword('');
        // router.push('/logged-in');
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
                            // onChange={ usernameChangeHandler }
                            onChange={ changeHandler }
                        />
                        <label>Birthday</label>
                        <input
                            id="birthday"
                            type="date"
                            value={ enteredBirthday }
                            // onChange={ birthdayChangeHandler }
                            onChange={ changeHandler }
                        />
                        <label>Email</label>
                        <input
                            id="email"
                            type="email"
                            value={ enteredEmail }
                            // onChange={ emailChangeHandler }
                            onChange={ changeHandler }
                        />
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            value={ enteredPassword }
                            // onChange={ passwordChangeHandler }
                            onChange={ changeHandler }
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