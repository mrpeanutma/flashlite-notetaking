import React from 'react';
import Card from './Card';
import './css/Set.css';
import Link from 'next/link';

function Set(props) {
    return (
        <li key={props.id} className="set-item">
            <Link href={`/set/${props.id}`}>
                { props.img ? (<img src={props.img} className="set-img" alt={props.title} />) : (<></>)}
                <div className="set-info">
                    <h2>{props.title}</h2>
                    <h3>{props.numOfTerms} Terms</h3>
                    <h3 className="user-content">Created by {props.creator}</h3>
                </div>
            </Link>
        </li>
    );
}

export default Set;