import {useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import React from 'react';
import "./css/Hdr.css";
import Button from './Button';
import Link from 'next/link';

const Hdr = (props) => {

  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png"

  // const [signedIn, setSignedIn] = useState(props.signedIn);

  const router = useRouter();
  const {userData, setUserData} = useContext(UserContext);

  function logoutHandler(event) {
    setUserData({token: undefined, user: undefined});
    localStorage.removeItem('auth-token');
    router.push('/');
  }

  // const [addingSet,setAddingSet] = useState(false);

  // function addSetHandler(event) {
  //   setAddingSet(!addingSet);
  // }

  if (userData.token) {
    return (
      <div className="hdr">
        
        <Link href='/'>
          <div className="hdr-left">
            <img src={LOGO} alt="FlashLITE"/>
            <h1>FlashLITE</h1>
          </div>
        </Link>
        <div className="buttons">
          <Button onClick={logoutHandler} className="logout-button">Logout</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hdr">
        <Link href='/'>
          <div className="hdr-left">
            <img src={LOGO} alt="FlashLITE"/>
            <h1>FlashLITE</h1>
          </div>
        </Link>
        <div className="buttons">
          <Button className="signup-button">
            <Link href="/signup">Signup</Link>
          </Button>
          <Button className="login-button">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }
};

export default Hdr;