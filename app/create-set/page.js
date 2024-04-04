'use client';

// import {useState} from 'react';

// import User from './components/User';
// import UsersList from './components/UsersList';
// import AddUser from './components/AddUser';
import Hdr from '../flashlite-components/Hdr';
import AddSet from '../flashlite-components/AddSet';
import './page.css';

function Home() {

  return (
    <div className='body'>

        <AddSet />
    </div>
  );
}

{/* <Hdr signedIn={true}/> */}

export default Home;