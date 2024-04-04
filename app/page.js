'use client';

import {useState} from 'react';

//import User from '/flashlite-components/User';
//import UsersList from '/flashlite-components/UsersList';
//import AddUser from './flashlite-components/AddUser';
import Hdr from './flashlite-components/Hdr';
import AddSet from './flashlite-components/AddSet';
import SetList from './flashlite-components/SetList';

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

  const DEFAULT_IMAGE = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

  const DEFAULT_SETS = [
    {
      id: "e1",
      img: DEFAULT_IMAGE,
      title: "Web Programming Midterm Review",
      numOfTerms: 37,
      creator: "bailey_greer77"
    },
    {
      id: "e2",
      img: DEFAULT_IMAGE,
      title: "History Test",
      numOfTerms: 95,
      creator: "mrpeanutma"
    },
    {
      id: "e3",
      img: DEFAULT_IMAGE,
      title: "Biology Terms",
      numOfTerms: 48,
      creator: "jry39286"
    }
  ];
  
  const [signedIn, setSignedIn] = useState(); 
  
  if (signedIn) { 
    return ( 
      <div> 
        <Hdr signedIn={true}/> 
        <p>Featured Sets</p>
        <AddSet />
        <SetList items={DEFAULT_SETS} /> 
      </div>
    )
  } else { 
    return ( 
      <div>         
        <Hdr signedIn={false}/>
        <p>Featured Sets</p>
        <SetList items={DEFAULT_SETS} />
      </div>
    )
      
  }
}

{/* <AddUser onAddUser={addUserHandler} />
<UsersList items={users} /> */}
export default Home;
