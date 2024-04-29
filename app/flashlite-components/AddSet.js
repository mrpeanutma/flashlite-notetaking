import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Button from './Button';
import './css/AddSet.css';

function AddSet(props) {

  const DEFAULT_IMG = "https://www.travelandleisure.com/thmb/kfcKH88gBt_d1ZJPFg_rUcyMekU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-grand-teton-USMNTNSIPOG0823-2538d183b9094e3fb59dd5e54bbe791c.jpg";
  const router = useRouter();

  //const {userData, setUserData} = useContext(UserContext);
  const [userData, setUserData] = useState({
    token: localStorage.getItem('auth-token'),
    username: localStorage.getItem('username')
  })

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    creator: '',
  });

  useEffect(() => {
      if(!userData.token) {
        console.log(userData);
        router.push('/'); // Redirect if not logged in
      } else {
        setFormData((prevState) => {
          return {...prevState, creator: userData.username}
        });
      }
  }, [userData.token, router]);

  const titleChangeHandler = (event) => {
      setFormData((prevState) => {
          return {...prevState, title: event.target.value}
      });
  };

  const imgChangeHandler = (event) => {
    setFormData((prevState) => {
        return {...prevState, image: event.target.value}
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
        if (!formData.title) {
            alert('Sets must have a title');
        } else {
            if(formData.img == '') {
              setFormData((prevState) => {
                return {...prevState, image: DEFAULT_IMG}
              })
            }
            const response = await axios.post('http://localhost:8085/api/sets/', formData);
            router.push('/');
        }
    } catch (error) {
        console.error('Create Set Failed:', error);
        alert('Create Set failed: ' + error.response.data.msg);
    }
  };

  return (
    <div className='body'>
      <p className="message">Enter Your Flashcard Set Information</p>
      <div className='input'>
        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={titleChangeHandler}
          />
          <label>Link to image</label>
          <input
            id="img"
            type="text"
            value={formData.image}
            placeholder={DEFAULT_IMG}
            onChange={imgChangeHandler}
          />
          <Button type="submit">Create Set</Button>
        </form>
      </div>
    </div>
  );
};

export default AddSet;