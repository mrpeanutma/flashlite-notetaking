import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './Addset.css';

function AddSet(props) {


  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredImg, setEnteredImg] = useState('');
  const [enteredCreator, setEnteredCreator] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  }

  const creatorChangeHandler = (event) => {
    setEnteredCreator(event.target.value);
  }
  
  const submitHandler = (event) => {
    event.preventDefault();

    const cards=[];

    const setData = {
      id: Math.random().toString(),
      title: enteredTitle,
      img: enteredImg,
      creator: enteredCreator,
      cards: cards
    }
    
    if (enteredImg === '') {
        setData.img = LOGO;
    }

    if (enteredTitle === '' || enteredCreator === '') {
    setEnteredImg(LOGO);
      alert('Title and Creator Required');
    } else {
      setEnteredTitle('');
      setEnteredImg('');
      setEnteredCreator('');
//      props.onAddSet(setData);
      console.log(setData);
    }
  };

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <label>Link to image</label>
         <input
          id="img"
          type="text"
          value={enteredImg}
          onChange={imgChangeHandler}
        />
        <label>Creator</label>
         <input
          id="creator"
          type="text"
          value={enteredCreator}
          onChange={creatorChangeHandler}
        />
        <Button type="submit">Create Set</Button>
      </form>
    </Card>
  );
};

export default AddSet;