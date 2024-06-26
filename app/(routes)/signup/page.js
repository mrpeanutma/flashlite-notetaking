'use client';

import Signup from '../../flashlite-components/Signup'
import {useState} from "react";
import Hdr from '../../flashlite-components/Hdr';
import Head from "next/head";
import {UserProvider} from "@/app/context/UserContext";

const Home = () => {

    const [, setSignupStatus] = useState();
    const signupHandler = (user) => {
        setSignupStatus(() => {
            console.log('user ' + user.username + ' signed up')
        })
        console.log(user);
    };

    return(
        <UserProvider>
            <Head>
                <link rel='icon' href='/public/favicon.ico'/>
            </Head>
            <Hdr/>
            <Signup onSignup={signupHandler}/>
        </UserProvider>
    )
}

export default Home;