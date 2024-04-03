import React from 'react';

import './Hdr.css';
import Button from './Button';

const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png"

const Hdr = (props) => {
  return (
    <div className="hdr">
      <img src={LOGO} alt="FlashLITE"/>
      <h1>FlashLITE</h1>
      <div className="buttons">
        <Button/>
        <Button/>
      </div>
    </div>
  );
};

export default Hdr;