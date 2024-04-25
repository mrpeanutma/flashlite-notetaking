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

// const [enteredTitle, setEnteredTitle] = useState(props.title);
// const [enteredImg, setEnteredImg] = useState(props.img);
// const [enteredCreator, setEnteredCreator] = useState(props.creator);

  const [error, setError] = useState('');

//   const changeHandler = (event) => {
//       setEnteredData({
//           ... enteredData,
//           [event.target.name]: event.target.value,
//       });
//   };

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
        console.error('Login Failed:', error);
        //Handle Login Error
    }
};

const deleteSetHandler = async (event) => {
  event.preventDefault();
  try {
    await axios.delete(`http://localhost:8085/api/sets/${props.id}`);
    router.push(`/`);
  } catch (error) {
    console.error('Delete Failed:', error);
    //Handle Login Error
  }
}

// try {
//     if (!enteredData.title) {
//         alert('Sets must have a title');
//     } else {
//         const response = await axios.post('http://localhost:8085/login', enteredData);
//         router.push('/');
//     }
// } catch (error) {
//     console.error('Login Failed:', error);
//     //Handle Login Error
// }





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
            //onChange={changeHandler}
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