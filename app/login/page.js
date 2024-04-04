'use client';

import Login from '../flashlite-components/Login'
import {useState} from "react";

const Home = () => {

    let loggedIn = false;

    const [, setLoginStatus] = useState(loggedIn);
    const loginHandler = (user) => {
        setLoginStatus(() => {
            loggedIn = true;
            console.log('user ' + user.username + ' loggedIn ' + loggedIn)
        })
        console.log(user);
    };

    return(
        <div>
            <Login onLogin={loginHandler}/>
        </div>
    )
}