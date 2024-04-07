'use client';

import Signup from '../flashlite-components/Signup'
import {useState} from "react";

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
            <Signup onSignup={signupHandler}/>
        </div>
    )
}

export default Home;