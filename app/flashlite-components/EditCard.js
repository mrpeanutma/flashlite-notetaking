import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from './Card';
import Button from './Button';
import './css/AddSet.css';

export default function AddCard(props) { // props include set id and set creator for redirecting

  const router = useRouter();
  const {userData, setUserData} = useContext(UserContext);

  useEffect(() => {
      if(!userData.token) {
        router.push('/'); // Redirect if not logged in
      } else if (userData.user != props.creator) {
        router.push(`/sets/${props.id}`)
      }
  }, [userData.token, router]);

  const [enteredData, setEnteredData] = useState ({
      term: props.term,
      definition: props.definition,
  });

  const [error, setError] = useState('');

  const changeHandler = (event) => {
      setEnteredData({
          ... enteredData,
          [e.target.name]: e.target.value,
      });
  };

  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
        if (!enteredData.term || !enteredData.definition) {
            alert('All fields must have an input.');
        } else {
            const response = await axios.put(`http://localhost:8085/api/sets/${props.id}`, enteredData);
            router.push('/');
        }
    } catch (error) {
        console.error('Login Failed:', error);
        //Handle Login Error
    }
  };

  return (
    <div className='body'>
      <p className="message">Enter Your Flashcard Information</p>
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label>Term:</label>
          <input
            id="term-input"
            type="text"
            // value={enteredTitle}
            value={enteredData.term}
            // onChange={titleChangeHandler}
            onChange={changeHandler}
          />
          <label>Definition:</label>
          <input
            id="definition-input"
            type="text"
            // value={enteredImg}
            value={enteredData.definition}
            // onChange={imgChangeHandler}
            onChange={changeHandler}
          />
          <Button type="submit">Create Card</Button>
        </form>
      </Card>
    </div>
  );
};