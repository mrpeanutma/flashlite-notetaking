'use client';

import {useState, useContext, useEffect} from 'react';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";
import Button from "@/app/flashlite-components/Button";
import './css/Signup.css';

const Signup = (props) => {

    const router = useRouter();
    const {userData, setUserData} = useContext(UserContext);

    useEffect(() => {
        if(userData.token) {
            router.push('/'); // Redirect if logged in
        }
    }, [userData.token, router]);

    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        // birthday: '',
        password: ''
    })

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
            if (!formData.username || !formData.email || ! formData.password) {
                alert('All fields required!');
            } else {
                const signupRes = await fetch('http://localhost:8085/api/users/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                } )
                const loginResponse = await fetch('http://localhost:8085/api/users/login',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        email: formData.email,
                        password: formData.password
                    })
                })
                const loginData = await loginResponse.json()


                localStorage.setItem("auth-token", loginData.token);
                localStorage.setItem("username", loginData.username);
                router.push('/');
            }

        } catch (error) {
            console.error('Signup Failed:', error);
            alert('Signup failed: ' + error.response.data.msg)
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
                            value={formData.username}
                            onChange={ changeHandler }
                        />
                        <label>Birthday</label>
                        <input
                            id="birthday"
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={ changeHandler }
                        />
                        <label>Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={ changeHandler }
                        />
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={ changeHandler }
                        />
                        <Button type="submit" className="signup">Sign up</Button>
                    </form>
                </div>
                <Button type="button" className="redirect" onClick={() => {router.push('/login')}}>Already have an account? Log in!</Button>
            </div>
            <div className="slogan">
                <h1>Shine brighter with FlashLITE:</h1>
                <h1>Illuminate your learning journey!</h1>
            </div>
        </div>
    )
}

export default Signup;