import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from './Card';
import Button from './Button';
import './css/AddSet.css';

export default function AddCard(props) { // props include set id and set creator for redirecting

  const router = useRouter();

  //const {userData, setUserData} = useContext(UserContext);
  const [userData, setUserData] = useState({
    token: localStorage.getItem('auth-token'),
    username: localStorage.getItem('username')
  })

  useEffect(() => {
      if(!userData.token) {
        router.push(`/`); // Redirect if not logged in
      } else if (userData.user !== props.creator) {
        router.push(`/`) // Redirect if not set creator
      }
  }, [userData.token, router]);

  const [formData, setFormData] = useState ({
      term: '',
      definition: '',
  });

  const [error, setError] = useState('');

  const termChangeHandler = (event) => {
    setFormData((prevState) => {
        return {...prevState, term: event.target.value}
    });
  };

  const defChangeHandler = (event) => {
    setFormData((prevState) => {
        return {...prevState, definition: event.target.value}
    });
  };

  // const changeHandler = (event) => {
  //     setEnteredData({
  //         ... enteredData,
  //         [e.target.name]: e.target.value,
  //     });
  // };

  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
        if (!formData.term || !formData.definition) {
            alert('All fields must have an input.');
        } else {
            const response = await axios.post(`http://localhost:8085/api/sets/${props.id}/new-card`, formData);
            router.push(`/set/${props.id}`);
        }
    } catch (error) {
        console.error('Add Card Failed:', error);
        alert('Add Card failed: ' + error.response.data.msg);
        //Handle Login Error
    }
  };

  return (
    <div className='body'>
      <p className="message">Enter Your Flashcard Information</p>
        <div className='input'>
          <form onSubmit={submitHandler}>
            <label>Term:</label>
            <input
              id="term-input"
              type="text"
              // value={enteredTitle}
              value={formData.term}
              onChange={termChangeHandler}
              // onChange={changeHandler}
            />
            <label>Definition:</label>
            <input
              id="definition-input"
              type="text"
              // value={enteredImg}
              value={formData.definition}
              onChange={defChangeHandler}
              // onChange={changeHandler}
            />
            <Button type="submit">Create Card</Button>
          </form>
        </div>
    </div>
  );
};