'use client';

// import {useState} from 'react';

import {UserProvider} from "@/app/context/UserContext";
import Hdr from '@/app/flashlite-components/Hdr';
import AddCard from '@/app/flashlite-components/AddCard';
import './page.css';

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