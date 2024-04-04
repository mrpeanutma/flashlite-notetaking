import React from 'react';
import './Set.css';

function Set(props) {
    return (    
        <li key={props.id} className="set-item">
            <div className="set-info">
                <img src={props.img} className="set-img" alt={props.title} />
                <h2>{props.title}</h2>
            </div>
                <div className="description">
                    <h3>{props.numOfTerms} Terms</h3>
                    <h3>Created by {props.creator}</h3>
                </div>
        </li>
    );
}
export default Set;