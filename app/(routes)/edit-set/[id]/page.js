'use client';

import {useState, useEffect, useContext} from 'react';

import {UserProvider} from "@/app/context/UserContext";
import Hdr from '@/app/flashlite-components/Hdr';
import EditSet from '@/app/flashlite-components/EditSet';
import './page.css';
import { useRouter } from 'next/navigation';

export default function Home({ params }) {
    const router = useRouter();

    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('auth-token'),
    //     username: localStorage.getItem('username')
    //   })

    return (
        <UserProvider>
                <Hdr/>
                <EditSet id={params.id}/>
        </UserProvider>
    );
}

{/* <Hdr signedIn={true}/> */}