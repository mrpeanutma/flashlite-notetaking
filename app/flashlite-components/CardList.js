import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from "./Card.js";
import Set from "./Set.js";
import "./css/SetList.css";
import Link from 'next/link';
import Button from "./Button.js";



export default function CardList(props) {
    const router = useRouter();

    const {userData, setUserData} = useContext(UserContext);

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
            {/* <Card className="sets"> */}
            <ul>
                {data.cards.map((cardId) => (
                    <Card id={cardId}/>
                ))}
                {userData.token ? (
                    <Link href={`/set/${router.query.id}/create-card`} >
                        <div className="add-card-card">
                            <p>Add Set</p>
                            <p className="plus-sign">+</p>
                        </div>
                    </Link>
                ) : (<></>)}
            </ul>
            {/* </Card> */}
        </div>
    );
}

