import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Set from "./Set.js";
import "./css/SetList.css";
import Link from 'next/link';
import Button from "./Button.js";

export default function Card(props) {

    const router = useRouter();

    const {userData, setUserData} = useContext(UserContext);

    const [data, setData] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8085/api/cards/${props.id}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
    }, [])

    if (!data) return null;
    
    return (
        <li key={props.id} className="card-item">
            {/* {props.img ? (
                <img src={props.img} className="term-img" alt={props.title} />
            ) : (<></>)} */}
            <Button className="edit-button" onClick={() => {router.push('/edit-card')}}>Edit</Button>
            <Button className="delete-button" onClick={() => {"Delete Item"}}>X</Button>
            <div className="term-info">
                <div className="term">{data.term}</div>
                <hr/>
                <div className="definition">{data.definition}</div>
            </div>
        </li>
    );
}