'use client';

import Login from '../flashlite-components/Login'
import {useState} from "react";

const Home = () => {
    let loggedIn = false;

    const [username, login] = useState(loggedIn);
    const loginHandler = (user) => {
        login (() => {
            loggedIn = true;
        })
        console.log(username);
    };

    return(
        <div>
            <Login onLogin={loginHandler}/>
        </div>
    )
}