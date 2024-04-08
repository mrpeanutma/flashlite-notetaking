import React from 'react';
import { useState } from 'react';
import "./Hdr.css";
import Button from './Button';
import Link from 'next/link';

const Hdr = (props) => {

  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png"

  const [signedIn, setSignedIn] = useState(props.signedIn);

  function logoutHandler(event) {
    setSignedIn(false);
    props.onLogout(false);
  }

  function loginHandler(event) {
    setSignedIn(True);
  }

  // const [addingSet,setAddingSet] = useState(false);

  // function addSetHandler(event) {
  //   setAddingSet(!addingSet);
  // }

  if (signedIn) {
    return (
      <div className="hdr">
        
        <Link href='/'>
          <div className="hdr-left">
            <img src={LOGO} alt="FlashLITE"/>
            <h1>FlashLITE</h1>
          </div>
        </Link>
        <div className="buttons">
          {/* <Button onClick={addSetHandler}></Button> */}
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
          {/* <Link href='/signup'>
             <Button>signup</Button>
          </Link>
          <Link href='/login'>
             <Button>login</Button>
          </Link> */}
        </div>
      </div>
    );
  }
};

export default Hdr;