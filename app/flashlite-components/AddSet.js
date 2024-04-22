import {useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from './Card';
import Button from './Button';
import './css/AddSet.css';

function AddSet(props) {

  const router = useRouter();
  const {userData, setUserData} = useContext(UserContext);

  useEffect(() => {
      if(!userData.token) {
          router.push('/'); // Redirect if not logged in
      }
  }, [userData.token, router]);

  const [enteredData, setEnteredData] = useState ({
      title: '',
      img: LOGO,
      creator: userData.username,
      numTerms: 0,
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
        if (!enteredData.title) {
            alert('Sets must have a title');
        } else {
            const response = await axios.post('http://localhost:8085/login', enteredData);
            router.push('/');
        }
    } catch (error) {
        console.error('Login Failed:', error);
        //Handle Login Error
    }
};

//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredImg, setEnteredImg] = useState('');
//   const [enteredCreator, setEnteredCreator] = useState('');




//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   }

//   const imgChangeHandler = (event) => {
//     setEnteredImg(event.target.value);
//   }

//   const creatorChangeHandler = (event) => {
//     setEnteredCreator(event.target.value);
//   }
  
//   const submitHandler = (event) => {
//     event.preventDefault();

//     const cards=[];

//     const setData = {
//       id: Math.random().toString(),
//       title: enteredTitle,
//       img: enteredImg,
//       creator: enteredCreator,
//       cards: cards
//     }

//     if (enteredTitle === '' || enteredCreator === '') {
//     setEnteredImg(LOGO);
//       alert('Title and Creator Required');
//     } else {
//     if (enteredImg === '') {
//             setData.img = LOGO;
//     }
//       setEnteredTitle('');
//       setEnteredImg('');
//       setEnteredCreator('');
// //      props.onAddSet(setData);
//       console.log(setData);
//       router.push('/logged-in');
//     }
//   };

  return (
    <div className='body'>
      <p className="message">Enter Your Flashcard Set Information</p>
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            // onChange={titleChangeHandler}
            onChange={changeHandler}
          />
          <label>Link to image</label>
          <input
            id="img"
            type="text"
            value={enteredImg}
            // onChange={imgChangeHandler}
            onChange={changeHandler}
          />
          <label>Creator</label>
          <input
            id="creator"
            type="text"
            value={enteredCreator}
            // onChange={creatorChangeHandler}
            onChange={changeHandler}
          />
          <Button type="submit">Create Set</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddSet;