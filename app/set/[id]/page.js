'use client';

import {useState} from 'react';
import { UserProvider } from '../../context/UserContext'

//import User from '/flashlite-components/User';
//import UsersList from '/flashlite-components/UsersList';
//import AddUser from './flashlite-components/AddUser';
import Hdr from '../../flashlite-components/Hdr';
import AddSet from '../../flashlite-components/AddSet';
import Link from 'next/link';
import SetList from '../../flashlite-components/SetList';
import Head from "next/head";
import Set from '../../flashlite-components/Set';

export default function Page() {

    return ( 
        <UserProvider>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
          <Hdr/> 
          <div> 
            {/* <SetList items={DEFAULT_SETS} signedIn={signedIn}/> */}
            <Set title="Test Card Set" numTerms="0" creator="Josh"/>
          </div>
        </UserProvider>
      );
}

