'use client';

import {useState, useEffect} from 'react';

import {UserProvider} from "@/app/context/UserContext";
import Hdr from '@/app/flashlite-components/Hdr';
import EditCard from '@/app/flashlite-components/EditCard';
import './page.css';

function Home({ params }) {

  // useEffect(() => {
  //   if(!userData.token) {
  //       router.push(`/set/${props.id}`); // Redirect if not logged in or is not creator of set
  //   }
  // }, [userData.token, router]);

  return (
    <UserProvider>
          <Hdr/>
          <EditCard id={params.id}/>
    </UserProvider>
  );
}

{/* <Hdr signedIn={true}/> */}

export default Home;