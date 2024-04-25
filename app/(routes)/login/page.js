'use client';

import Login from '@/app/flashlite-components/Login';
import Hdr from '@/app/flashlite-components/Hdr';
import {useState} from "react";
import Head from "next/head";
import {UserProvider} from "@/app/context/UserContext";

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
        <UserProvider>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Hdr loggedIn={false}/>
            <Login onLogin={loginHandler}/>
        </UserProvider>
    )
}

export default Home;