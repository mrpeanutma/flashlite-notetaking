'use client';

// import {useState} from 'react';

// import User from './components/User';
// import UsersList from './components/UsersList';
// import AddUser from './components/AddUser';
import Hdr from '../flashlite-components/Hdr';
import AddSet from '../flashlite-components/AddSet';

function Home() {

  return (
    <div>
        <Hdr signedIn={true}/>
        <AddSet />
    </div>
  );
}

export default Home;