import React from 'react';
import './Set.css';

function User(props) {
    return (    
        <li key={props.id} className="set-item">
            <img src={props.img} className="set-img" alt={props.title} />
            <div className="set-info">
                <h2>{props.title}</h2>
                <h3>{props.numOfTerms} Terms</h3>
                <h3 className="user-content">Created by {props.creator}</h3>
            </div>
        </li>
    );
}

export default Set;