import React from 'react';
import './css/Card.css';
import Link from 'next/link';
import Button from './Button';
import { useRouter } from "next/navigation";

export default function Card(props) {
    const router = useRouter();
    return (
        <li key={props.id} className="card-item">
            {/* {props.img ? (
                <img src={props.img} className="term-img" alt={props.title} />
            ) : (<></>)} */}
            <Button className="edit-button" onClick={() => {router.push('/edit-card')}}>Edit</Button>
            <Button className="delete-button" onClick={() => {"Delete Item"}}>X</Button>
            <div className="term-info">
                <div className="term">{props.term}</div>
                <div className="definition">{props.definition}</div>
            </div>
        </li>
    );
}