'use client';

import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Button from "@/app/flashlite-components/Button";
import Card from "@/app/flashlite-components/Card";
import './css/Login.css';
import Link from 'next/link';

const Login = (props) => {

    const router = useRouter();
    const {userData, setUserData} = useContext(UserContext);

    useEffect(() => {
        if(userData.token) {
            router.push('/'); // Redirect if logged in
        }
    }, [userData.token, router]);

    const [formData, setFormData] = useState ({
         username: '',
         email: '',
         password: '',
    });

    // const [error, setError] = useState('');

    // const changeHandler = (e) => {
    //     setEnteredData({
    //         ...enteredData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setFormData((prevState) => {
            return {...prevState, username: event.target.value};
        })
    }

    const emailChangeHandler = (event) => {
        setFormData((prevState) => {
            return {...prevState, email: event.target.value};
        })
    }

    const passwordChangeHandler = (event) => {
        setFormData((prevState) => {
            return {...prevState, password: event.target.value};
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {

            if ((!formData.username && !formData.email) || !formData.password) {
                alert('Username/Email AND Password required!');
            } else {
                const response = await axios.post('http://localhost:8085/api/users/login', formData);
                setUserData({
                    token: response.data.token,
                    user: response.data.user,
                });
                localStorage.setItem("auth-token", response.data.token);
                localStorage.setItem('username', response.data.user.username)
                console.log(userData);
                router.push('/');
            }

            // const userData = {
            //     id: Math.random().toString(),
            //     username: enteredUsername,
            //     email: enteredEmail,
            //     password: enteredPassword,
            // }

            // if (!enteredUsername && !enteredEmail){
            //     alert('Username or email required!')
            //     setEnteredUsername('');
            //     setEnteredEmail('');
            //     setEnteredPassword('');
            // }
            // else if(!enteredPassword){
            //     alert('Password required!')
            //     setEnteredUsername('');
            //     setEnteredEmail('');
            //     setEnteredPassword('');
            // }
            // else{
            //     props.onLogin(userData);
            //     setEnteredUsername('');
            //     setEnteredEmail('');
            //     setEnteredPassword('');
            //     router.push('/logged-in');
            // }
        } catch (error) {
            console.error('Login Failed: ', error);
            alert('Login failed: ' + error.response.data.msg);
        }
    };

    return (
        <div className="container">
            <div className="form">
                <p className="message">Enter the following information:</p>
                <div className="input">
                    <form onSubmit={ submitHandler }>
                        <label>Username</label>
                        <input
                            id="username"
                            type="text"
                            value={ formData.username }
                            //value={enteredData.username}
                            onChange={ usernameChangeHandler }
                            //onChange={ changeHandler }
                        />
                        <p>OR</p>
                        <label>Email</label>
                        <input
                            id="email"
                            type="email"
                            value={ formData.email }
                            //value={enteredData.email}
                            onChange={ emailChangeHandler }
                            //onChange={ changeHandler }
                        />
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            value={ formData.password }
                            //value={enteredData.password}
                            onChange={ passwordChangeHandler }
                            //onChange={ changeHandler }
                        />
                        <Button type="submit" className="login">Login</Button>
                    </form>
                </div>

                <Button type="button" className="redirect" onClick={() => {router.push('/signup')}}>Don't have an account? Sign up!</Button>
            </div>
            <div className="slogan">
                <h1>Shine brighter with FlashLITE:</h1>
                <h1>Illuminate your learning journey!</h1>
            </div>
        </div>
    )
}

export default Login;