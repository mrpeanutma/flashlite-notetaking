'use client';

import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from "next/navigation";
import {UserProvider} from "@/app/context/UserContext";
import './page.css';

//import User from '/flashlite-components/User';
//import UsersList from '/flashlite-components/UsersList';
//import AddUser from './flashlite-components/AddUser';
import Hdr from '../../../flashlite-components/Hdr';
import StudySet from '../../../flashlite-components/StudySet';
import CardList from '../../../flashlite-components/CardList';
import Head from "next/head";
import Button from '../../../flashlite-components/Button'


export default function Page({ params }) {
  
  const router = useRouter();

  const [data, setData] = useState(null)
  
  useEffect(()=> {
    axios.get(`http://localhost:8085/api/sets/${params.id}`)
        .then((response) => {
            setData(response.data);
        })
        .catch((err)=> {
            console.log('Error')
        })
  }, [])

  if (!data) return null;

  return ( 
    <UserProvider>
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Hdr/>
      <div className="set-options">
        <div className='set-description'>
          <div className='set-creator'>By: {data.creator}</div>
          <div className='set-title'>{data.title}</div>
        </div>
      </div>
      <div> 
        <StudySet id={params.id}/>
      </div>
    </UserProvider>
  );
}

