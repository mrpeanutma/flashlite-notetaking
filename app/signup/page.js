'use client';

import Signup from '../flashlite-components/Signup'
import {useState} from "react";
import Hdr from '../flashlite-components/Hdr';

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
            <Hdr loggedIn={false}/>
            <Signup onSignup={signupHandler}/>
        </div>
    )
}

export default Home;