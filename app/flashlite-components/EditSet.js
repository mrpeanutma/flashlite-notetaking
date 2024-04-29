import {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from './Card';
import Button from './Button';
import './css/AddSet.css';

function EditSet(props) {

    const LOGO = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

    const router = useRouter();

    // const {userData, setUserData} = useContext(UserContext);
    const [userData, setUserData] = useState({
       token: localStorage.getItem('auth-token'),
       username: localStorage.getItem('username')
     })

  const [formData, setFormData] = useState ({
      title: '',
      image: '',
  });

  const [error, setError] = useState('');

const titleChangeHandler = (event) => {
  setFormData((prevState) => {
    return {...prevState, title: event.target.value};
  });
}

const imgChangeHandler = (event) => {
  setFormData((prevState) => {
    return {...prevState, image: event.target.value};
  });
}

  useEffect(()=> {
    axios.get(`http://localhost:8085/api/sets/${props.id}`)
      .then((response) => {
          console.log(response.data);
          setFormData({
            title: response.data.title,
            image: response.data.image
          });
      })
      .then(() => {
          if(!userData.token) {
              router.push(`/set/${props.id}`); // Redirect if not logged in or is not creator of set
          }
      })
  }, [])
  
  

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
        if (!formData.title) {
            alert('Sets must have a title');
        } else {
            const response = await axios.put(`http://localhost:8085/api/sets/${props.id}`, formData);
            router.push(`/set/${props.id}`);
        }
    } catch (error) {
        console.error('Edit set failed:', error);
        alert('Edit Set failed: ' + error.response.data.msg);
    }
};

const deleteSetHandler = async (event) => {
  event.preventDefault();
  try {
    await axios.delete(`http://localhost:8085/api/sets/${props.id}`);
    router.push(`/`);
  } catch (error) {
    console.error('Delete Set Failed:', error);
    alert('Delete Set Failed: ' + error.response.data.msg);
  }
}

  return (
    <div className='body'>
      <p className="message">Enter Your Flashcard Set Information</p>
      {/* <Card className="input"> */}
      <div className='input'>
        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input
            id="title"
            type="text"
            value={formData.title}
            //value={enteredData.title}
            onChange={titleChangeHandler}
            //onChange={changeHandler}
          />
          <label>Link to image</label>
          <input
            id="img"
            type="text"
            value={formData.image}
            //value={enteredData.img}
            onChange={imgChangeHandler}

          />
          <div className='toolbar'>
            <Button type="submit">Update Set</Button>
            <Button className="deleteButton" onClick={deleteSetHandler}>Delete Set</Button>
          </div>
        </form>
      {/* </Card> */}
      </div>
    </div>
  );
};

export default EditSet;