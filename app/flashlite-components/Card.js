import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Set from "./Set.js";
import "./css/Card.css";
import Link from 'next/link';
import Button from "./Button.js";

export default function Card(props) {

    const router = useRouter();

    const {userData, setUserData} = useContext(UserContext);
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('auth-token'),
    //     username: localStorage.getItem('username')
    // })

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
        <li key={data._id} className="card-item">
            {/* {props.img ? (
                <img src={props.img} className="term-img" alt={props.title} />
            ) : (<></>)} */}
            <div className="term-info">
                {props.creator == userData.username ? 
                    (<Button className="edit-button" onClick={() => {router.push(`/edit-card/${data._id}`)}}>Edit/Delete</Button> )
                    : (<></>) 
                }
                <Button className="edit-button" onClick={() => {router.push(`/edit-card/${data._id}`)}}>Edit/Delete</Button>
                <div className="term">{data.term}</div>
                <hr/>
                <div className="definition">{data.definition}</div>
            </div>
        </li>
    );
}