'use client';

// import {useState} from 'react';

import {UserProvider} from "@/app/context/UserContext";
import Hdr from '@/app/flashlite-components/Hdr';
import AddC from '@/app/flashlite-components/AddSet';
import './page.css';
import {UserProvider} from "@/app/context/UserContext";

function Home() {

  return (
    <UserProvider>
      <div className='page'>
          <Hdr/>
          <AddCard />
      </div>
    </UserProvider>
  );
}

{/* <Hdr signedIn={true}/> */}

export default Home;