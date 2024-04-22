'use client';

import Signup from '../flashlite-components/Signup'
import {useState} from "react";
import Hdr from '../flashlite-components/Hdr';
import Head from "next/head";

const Home = () => {

    const [, setSignupStatus] = useState();
    const signupHandler = (user) => {
        setSignupStatus(() => {
            console.log('user ' + user.username + ' signed up')
        })
        console.log(user);
    };

    return(
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Hdr loggedIn={false}/>
            <Signup onSignup={signupHandler}/>
        </div>
    )
}

export default Home;