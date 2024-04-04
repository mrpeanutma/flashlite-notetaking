import React from 'react';

import './Hdr.css';
import Button from './Button';
import Link from 'next/link';

const Hdr = (props) => {

  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png"

  const [signedIn, setSignedIn] = useState(props.signedIn);

  function logoutHandler(event) {
    setSignedIn(false);
  }

  const [addingSet,setAddingSet] = useState(false);

  function addSetHandler(event) {
    setAddingSet(!addingSet);
  }

  if (signedIn) {
    return (
      <div className="hdr">
        <img src={LOGO} alt="FlashLITE"/>
        <h1>FlashLITE</h1>
        <div className="buttons">
          <Button onClick={addSetHandler}></Button>
          <Button onClick={logoutHandler} className="logout-button">Logout</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hdr">
        <img src={LOGO} alt="FlashLITE"/>
        <h1>FlashLITE</h1>
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