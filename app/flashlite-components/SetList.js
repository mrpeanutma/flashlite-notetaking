import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Set from "./Set.js";
import "./css/SetList.css";
import Link from 'next/link';



function SetList() {
    const router = useRouter();

    const {userData, setUserData} = useContext(UserContext);

    const [data, setData] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:8085/api/sets')
            .then((response) => {
                setData(response.data);
            })
            .catch((err)=> {
                console.log('Error')
            })
    }, [])

    if (!data) return null;
    
    return (
        <div className="items">
            <ul>
                {data.map((set) => (
                    <Set
                        id={set._id}
                        img={set.image}
                        title={set.title}
                        numOfTerms={set.cards.length}
                        creator={set.creator}
                    />
                ))}
                {userData.token ? (
                    <Link href='/create-set'>
                        <div key="add-set" className="add-set-card">
                            <p>Add Set</p>
                            <p className="plus-sign">+</p>
                        </div>
                    </Link>
                ) : (<></>)}
            </ul>
        </div>
    );
}

export default SetList;
