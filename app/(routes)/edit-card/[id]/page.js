'use client';

// import {useState} from 'react';

import {UserProvider} from "@/app/context/UserContext";
import Hdr from '@/app/flashlite-components/Hdr';
import EditCard from '@/app/flashlite-components/EditCard';
import './page.css';

function Home({ params }) {

  return (
    <UserProvider>
      <div className='page'>
          <Hdr/>
          <EditCard id={params.id}/>
      </div>
    </UserProvider>
  );
}

{/* <Hdr signedIn={true}/> */}

export default Home;