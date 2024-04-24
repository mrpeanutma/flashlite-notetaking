import React from 'react';
import Card from './Card';
import './css/Set.css';
import Link from 'next/link';

function Set(props) {
    //const DEFAULT_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdBA9dnijNmKuHaYkEDKcy80J2Eexp4PEvMDCB0PcPg&s";
    const DEFAULT_IMG = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjZzbHA4c25wdGFtYTZoMTJ2NzhkY3BndGFxeXRqZmVvZ2t6ODkxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ov5NiLVXT8JEc/200.webp"
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