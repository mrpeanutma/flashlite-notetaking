import React from 'react';
import Card from './Card';
import './css/Set.css';
import Link from 'next/link';

function Set(props) {
    const DEFAULT_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdBA9dnijNmKuHaYkEDKcy80J2Eexp4PEvMDCB0PcPg&s";

    return (
        <li key={props.id} className="set-item">
            <Link href={`/set/${props.id}`} className='set-link'>
                { props.img ? (<img src={props.img} className="set-img" alt={props.title} />) : (<img src={DEFAULT_IMG} className="set-img" alt={props.title} />)}
                <div className="set-info">
                    <h2 className='title'>{props.title}</h2>
                    <div className='set-data'>
                        <h3 className='terms'>{props.numOfTerms} Terms</h3>
                        <h3 className="creator">Created by {props.creator}</h3>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default Set;