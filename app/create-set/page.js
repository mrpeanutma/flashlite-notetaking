'use client';

// import {useState} from 'react';

import {UserProvider} from "../../app/context/UserContext";

import Hdr from '@/app/flashlite-components/Hdr';
import AddSet from '@/app/flashlite-components/AddSet';
import './page.css';

function Home() {

  return (
    <UserProvider>
          <Hdr/>
          <AddSet />
    </UserProvider>
  );
}

{/* <Hdr signedIn={true}/> */}

export default Home;