'use client';

import {useState} from 'react';

import User from './User';
import UsersList from './UsersList';
import AddUser from './AddUser';
import './Hdr.css';
import Button from './Button';

const Hdr = () => {
  const DEFAULT_IMAGE = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
  
  const DEFAULT_USERS = [
    {
      id: Math.random().toString(),
      name: "John Doe",
      age: 20,
      major: "Engineering",
      img: DEFAULT_IMAGE,
      //img: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      id: Math.random().toString(),
      name: "Jane Doe",
      age: 25,
      major: "Marketing",
      img: DEFAULT_IMAGE,
      //img: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      id: Math.random().toString(),
      name: "Chuck Noris",
      age: 84,
      major: "Acting",
      img: DEFAULT_IMAGE,
      //img: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
  ];

  const [users,setUsers] = useState(DEFAULT_USERS);

  const addUserHandler = (user) => {
      setUsers ((prevUsers) => {
          return [user, ...prevUsers];
      });
      console.log(users);
  };
  
  const [addingUser,setAddingUser] = useState(true);

  function clickHandler(event) {
    if (addingUser) {
      setAddingUser(false);
    } else {
      setAddingUser(true);
    }
  }

  if (addingUser) {
    return (
      <div> 
        <div className="hdr">
          <h1>Signup</h1>
          <Button onClick={clickHandler}> Add Users </Button>
        </div>
        <UsersList items={users} />
      </div>
    );
  } else {
    return (
      <div> 
        <div className="hdr">
          <h1>Signup</h1>
          <Button onClick={clickHandler}> Cancel </Button>
        </div>
        <AddUser onAddUser={addUserHandler} />
        <UsersList items={users} />
      </div>
    );
  }
};

export default Hdr;

// import React from 'react';

// import './Hdr.css';

// const Hdr = () => {
//   return (
//     <div className="hdr">
//      <h1>Signup</h1>
//     </div>
//   );
// };

// export default Hdr;