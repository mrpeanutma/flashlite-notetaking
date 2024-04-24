'use client';

// import {useState} from 'react';

import Hdr from '../flashlite-components/Hdr';
import AddSet from '../flashlite-components/AddSet';
import './page.css';
import {UserProvider} from "@/app/context/UserContext";

function Home() {

  return (
    <UserProvider>
      <div className='page'>
          <Hdr signedIn={true}/>
          <AddSet />
      </div>
    </UserProvider>
  );
}

{/* <Hdr signedIn={true}/> */}

export default Home;