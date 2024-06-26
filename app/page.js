'use client';

import {useState} from 'react';
import {UserProvider} from './context/UserContext';

//import User from '/flashlite-components/User';
//import UsersList from '/flashlite-components/UsersList';
//import AddUser from './flashlite-components/AddUser';
import Hdr from '@/app/flashlite-components/Hdr';
import AddSet from '@/app/flashlite-components/AddSet';
import Link from 'next/link';
import SetList from '@/app/flashlite-components/SetList';
import Head from "next/head";
import Set from './flashlite-components/Set';

function Home() {

  function logoutHandler(event) {
    setSignedIn(false);
  }
  
  const [signedIn, setSignedIn] = useState(false); 

  const DEFAULT_IMG = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

 const DEFAULT_SETS = [];
  //   {
  //     id: Math.random().toString(),
  //     img: DEFAULT_IMG,
  //     title: 'HTML Terms',
  //     numOfTerms: '27',
  //     creator: 'Josh Young'
  //   },
  //   {
  //     id: Math.random().toString(),
  //     img: DEFAULT_IMG,
  //     title: 'React Functions',
  //     numOfTerms: '35',
  //     creator: 'Bailey'
  //   },
  //   {
  //     id: Math.random().toString(),
  //     img: DEFAULT_IMG,
  //     title: 'Final Exam Review',
  //     numOfTerms: '127',
  //     creator: 'Connor Stephens'
  //   },
  //   {
  //     id: Math.random().toString(),
  //     img: DEFAULT_IMG,
  //     title: 'All Buzz Lightyear References From Web Programing',
  //     numOfTerms: '1053',
  //     creator: 'Emily Cheng'
  //   },
  // ];
    return ( 
      <UserProvider>
          <Head>
              <link rel='icon' href='/favicon.ico'/>
          </Head>
        <Hdr/> 
        <div> 
          <SetList/>
          {/*<Set title="Test Card Set" numTerms="0" creator="Josh"/>*/}
        </div>
      </UserProvider>
    );
      
  }
export default Home;
