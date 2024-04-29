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
    definition: '',
    inSet: ''
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

  useEffect(()=> {
      axios.get(`http://localhost:8085/api/cards/${props.id}`)
          .then((response) => {
            console.log(response.data)
              setFormData(response.data);
          })
  }, [])


  const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
        if (!formData.term || !formData.definition) {
            alert('All fields must have an input.');
        } else {
            console.log(formData);
            const response = await axios.put(`http://localhost:8085/api/cards/${props.id}`, formData);
            if (inSet) {router.push(`/set/${formData.inSet}`);
              } else {router.push(`/`);}
        }
    } catch (error) {
        console.error('Edit Card Failed:', error);
        alert('Edit Card failed: ' + error.response.data.msg);
    }
  };

  const deleteCardHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:8085/api/cards/${props.id}`);
      if (inSet) {router.push(`/set/${formData.inSet}`);
        } else {router.push(`/`);}
    } catch (error) {
      console.error('Delete Card Failed:', error);
      alert('Delete Card failed: ' + error.response.data.msg);
    }
  }

  return (
    <div className='body'>
      <p className="message">Enter Your Flashcard Information</p>
        <div className='input'>
          <form onSubmit={submitHandler}>
            <label>Term:</label>
            <input
              id="term-input"
              type="text"
              value={formData.term}
              onChange={termChangeHandler}
            />
            <label>Definition:</label>
            <input
              id="definition-input"
              type="text"
              value={formData.definition}
              onChange={defChangeHandler}
            />
            <div className='toolbar'>
              <Button type="submit">Save Changes</Button>
              <Button className="deleteButton" onClick={deleteCardHandler}>Delete Card</Button>
            </div>
          </form>
        </div>
    </div>
  );
};