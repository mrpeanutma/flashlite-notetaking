'use client';

import {useState} from 'react';

import User from './components/User';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import AddSet from './flashlite-components/AddSet';

function Home() {
  // const DEFAULT_IMAGE = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
  
  // const DEFAULT_USERS = [
  //   {
  //     id: Math.random().toString(),
  //     name: "John Doe",
  //     age: 20,
  //     major: "Engineering",
  //     img: DEFAULT_IMAGE,
  //     //img: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  //   },
  //   {
  //     id: Math.random().toString(),
  //     name: "Jane Doe",
  //     age: 25,
  //     major: "Marketing",
  //     img: DEFAULT_IMAGE,
  //     //img: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  //   },
  //   {
  //     id: Math.random().toString(),
  //     name: "Chuck Noris",
  //     age: 84,
  //     major: "Acting",
  //     img: DEFAULT_IMAGE,
  //     //img: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  //   },
  // ];

  // const [users,setUsers] = useState(DEFAULT_USERS);

  // const addUserHandler = (user) => {
  //     setUsers ((prevUsers) => {
  //         return [user, ...prevUsers];
  //     });
  //     console.log(users);
  // };
  
  return (
    <AddSet/>
  );
}

{/* <AddUser onAddUser={addUserHandler} />
<UsersList items={users} /> */}

export default Home;