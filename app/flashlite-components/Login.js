'use client';

import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Button from "@/app/flashlite-components/Button";
import './css/Login.css';

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


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    }


    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            if ((!formData.username && !formData.email) || !formData.password) {
                alert('Username/Email AND Password required!');
            } else {
                const loginResponse = await fetch('http://localhost:8085/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        password: formData.password
                    })
                });

                const responseJson = await loginResponse.json();
                setUserData({
                    token: responseJson.token,
                    user: responseJson.user,
                });
                console.log('Response JSON:', responseJson);

                localStorage.setItem("auth-token", responseJson.token);
                localStorage.setItem('username', responseJson.user.username);
                router.push('/');
            }

        } catch (error) {
            console.error('Login Failed: ', error);
            alert('Login failed: ' + error.message);
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
                            name="username"
                            value={ formData.username }
                            onChange={ changeHandler }
                        />
                        <p>OR</p>
                        <label>Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={ formData.email }
                            onChange={ changeHandler }
                        />
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={ formData.password }
                            onChange={ changeHandler }
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