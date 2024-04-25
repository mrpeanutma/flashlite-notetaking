import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from './Card';
import Button from './Button';
import './css/AddSet.css';

export default function EditCard(props) { // props include card id and set creator for redirecting

  const router = useRouter();
  const {userData, setUserData} = useContext(UserContext);

  // const [userData, setUserData] = useState({
  //   token: localStorage.getItem('auth-token'),
  //   username: localStorage.getItem('username')
  // })

  const [formData, setFormData] = useState({
    term: '',
    definition: ''
  });

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

  useEffect(() => {
        axios.get(`http://localhost:8085/api/cards/${props.id}`)
          .then((response) => {
              console.log(response.data);
              setFormData({
                term: response.data.term,
                definition: response.data.definition
              });
          })
  }, [userData.token, router]);

  const [error, setError] = useState('');

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
            const response = await axios.put(`http://localhost:8085/api/cards/${props.id}`, formData);
            router.push(`/sets/${props.id}`);
        }
    } catch (error) {
        console.error('Login Failed:', error);
        //Handle Login Error
    }
  };

  return (
    <div className='body'>
      <p className="message">Enter Your Flashcard Information</p>
        <form onSubmit={submitHandler}>
          <label>Term:</label>
          <input
            id="term-input"
            type="text"
            // value={enteredTitle}
            value={formData.term}
            // onChange={titleChangeHandler}
            onChange={termChangeHandler}
          />
          <label>Definition:</label>
          <input
            id="definition-input"
            type="text"
            // value={enteredImg}
            value={formData.definition}
            // onChange={imgChangeHandler}
            onChange={defChangeHandler}
          />
          <Button type="submit">Save Changes</Button>
        </form>
    </div>
  );
};