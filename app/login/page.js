'use client';

import Login from '../flashlite-components/Login';
import Hdr from '../flashlite-components/Hdr';
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
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Hdr loggedIn={false}/>
            <Login onLogin={loginHandler}/>
        </div>
    )
}

export default Home;