import {useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

import React from 'react';
import "./css/Hdr.css";
import Button from './Button';
import Link from 'next/link';
import UserContext from "@/app/context/UserContext";


const Hdr = (props) => {

  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png"

  const router = useRouter();
  const {userData, setUserData} = useContext(UserContext);

  function logoutHandler(event) {
    console.log(userData);
    setUserData({token: undefined, user: undefined});
    localStorage.removeItem('auth-token');
    localStorage.removeItem('username');
    router.push('/');
  }

  return(
      <div className="hdr">
        <Link href='/'>
          <div className="hdr-left">
            <img src={LOGO} alt="FlashLITE"/>
            <h1>FlashLITE</h1>
          </div>
        </Link>
        <div className="buttons">
          {userData.token ? (
            <Button onClick={logoutHandler} className="logout-button">Logout</Button>
          ) : (
            <>
              <Button className="signup-button" onClick={() => {router.push('/login')}}>Login</Button>
              <Button onClick={()=>{router.push('/signup')}}>Signup</Button>
            </>
          )}
        </div>
      </div>
  );
};

export default Hdr;