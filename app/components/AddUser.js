import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredImg, setEnteredImg] = useState('');
  const [enteredMajor, setEnteredMajor] = useState('');


  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  }

  const majorChangeHandler = (event) => {
    setEnteredMajor(event.target.value);
  }
  
  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
      img: enteredImg,
      major: enteredMajor
    }

    if (enteredName === '') {
      console.log('Username Required');
    } else {
      setEnteredName('');
      setEnteredAge('');
      setEnteredImg('');
      setEnteredMajor('');
      props.onAddUser(userData);
    }
  };

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <label>Link to image</label>
         <input
          id="img"
          type="text"
          value={enteredImg}
          onChange={imgChangeHandler}
        />
        <label>Major</label>
         <input
          id="major"
          type="text"
          value={enteredMajor}
          onChange={majorChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
