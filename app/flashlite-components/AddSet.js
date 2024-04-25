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
    image: DEFAULT_IMG,
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

  const [error, setError] = useState('');

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
                return {...prevState, image: null}
              })
            }
            // setFormData((prevState) => {
            //   return {
            //     ...prevState,
            //     creator: userData.username
            //   }
            // })
            const response = await axios.post('http://localhost:8085/api/sets/', formData);
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
      {/* <Card className="input"> */}
      <div className='input'>
        <form onSubmit={submitHandler}>
          <label>Title</label>
          <input
            id="title"
            type="text"
            // value={enteredTitle}
            value={formData.title}
            onChange={titleChangeHandler}
            // onChange={changeHandler}
          />
          <label>Link to image</label>
          <input
            id="img"
            type="text"
            // value={enteredImg}
            value={formData.image}
            onChange={imgChangeHandler}
            // onChange={changeHandler}
          />
          <Button type="submit">Create Set</Button>
        </form>
      {/* </Card> */}
      </div>
    </div>
  );
};

export default AddSet;