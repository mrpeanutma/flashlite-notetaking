'use client';

import {useState} from 'react';

//import User from '/flashlite-components/User';
//import UsersList from '/flashlite-components/UsersList';
//import AddUser from './flashlite-components/AddUser';
import Hdr from '../flashlite-components/Hdr';
// import AddSet from './/flashlite-components/AddSet';
// import Link from 'next/link';
import SetList from '../flashlite-components/SetList';
import { useRouter } from "next/navigation";

function Home() {

  function logoutHandler(event) {
    setSignedIn(false);
    router.push('/');
  }
  
  const [signedIn, setSignedIn] = useState(true); 

  const router = useRouter();

  const DEFAULT_IMG = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

  const DEFAULT_SETS = [
    {
      id: Math.random().toString(),
      img: DEFAULT_IMG,
      title: 'HTML Terms',
      numOfTerms: '27',
      creator: 'Josh Young'
    },
    {
      id: Math.random().toString(),
      img: DEFAULT_IMG,
      title: 'React Functions',
      numOfTerms: '35',
      creator: 'Bailey'
    },
    {
      id: Math.random().toString(),
      img: DEFAULT_IMG,
      title: 'Final Exam Review',
      numOfTerms: '127',
      creator: 'Connor Stephens'
    },
    {
      id: Math.random().toString(),
      img: DEFAULT_IMG,
      title: 'All Buzz Lightyear References From Web Programing',
      numOfTerms: '1053',
      creator: 'Emily Cheng'
    },
  ];
    return ( 
      <div>
        <Head>
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Hdr signedIn={signedIn} onLogout={logoutHandler}/> 
        <div> 
          <SetList items={DEFAULT_SETS} signedIn={signedIn}/>
        </div>
      </div>
    );
      
  }

  export default Home;