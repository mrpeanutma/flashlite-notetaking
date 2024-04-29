import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from "./Card.js";
import Set from "./Set.js";
import "./css/CardList.css";
import Link from 'next/link';



export default function CardList(props) {

    const router = useRouter();

    const {userData, setUserData} = useContext(UserContext);
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('auth-token'),
    //     username: localStorage.getItem('username')
    // })

    const [data, setData] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8085/api/sets/${props.id}`)
            .then((response) => {
                console.log(response.data.cards);
                setData(response.data);
            })
    }, [])

    if (!data) return null;

    return (
        <div className="cards">
            <ul>
                {data.cards.map((cardId) => (
                    <Card id={cardId} creator={data.creator}/>
                ))}
                {userData.token && userData.username == data.creator ? (
                    <Link href={`/create-card/${props.id}`} >
                        <div className="add-card-card">
                            <p>Add Card</p>
                            <p className="plus-sign">+</p>
                        </div>
                    </Link>
                ) : (<></>)}
            </ul>
        </div>
    );
}

