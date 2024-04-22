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
              <Button onClick={() => {router.push('/login')}}>Login</Button>
              <Button onClick={()=>{router.push('/signup')}}>Signup</Button>
            </>
          )}
        </div>
      </div>
  );
};

export default Hdr;