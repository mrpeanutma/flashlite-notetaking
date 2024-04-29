import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from "next/navigation";

import Card from "./Card.js";
import Set from "./Set.js";
import "./css/StudySet.css";
import Link from 'next/link';
import Button from "@/app/flashlite-components/Button";



export default function CardList(props) {

    const router = useRouter();

    const {userData, setUserData} = useContext(UserContext);
    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem('auth-token'),
    //     username: localStorage.getItem('username')
    // })

    const [data, setData] = useState(null);
    const [current, setCurrent] = useState(0);
    const [currentCard, setCurrentCard] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:8085/api/sets/${props.id}`)
            .then((response) => {
                console.log(response.data.cards);
                setData(response.data);
            })
    }, [])

    if (!data) return null;

        const studySet = data.cards;

        for (let i = 0; i < studySet.length; i++) {
            let temp = studySet[i];
            let index = Math.floor(Math.random() * studySet.length);
            studySet[i] = studySet[index];
            studySet[index] = temp;
        }

        const studyCards = studySet.map((cardId) => (
            <Card id={cardId} creator={data.creator}/>
        ));

        const previousHandler = () => {
            console.log("Previous Clicked!");
            if (current > 0) {
                setCurrent(current - 1);
                setCurrentCard(studyCards[current]);
                const ID = currentCard.props.id;
                console.log('Previous: ', {ID});
                // console.log('Previous: ', {currentCard});
                console.log("Current: ", current);
            }
        }

        const nextHandler = () => {
            console.log("Next Clicked!", current);
            if (current < studyCards.length - 1) {
                setCurrent(current + 1);
                setCurrentCard(studyCards[current]);
                const ID = currentCard.props.id;
                console.log('Previous: ', {ID});
                // console.log('Previous: ', {currentCard});
                console.log("Current: ", current);
            }
        }

        // console.log("StudyCards: ", studyCards);

    return (
        <div className="cards">
            <ul>
                {currentCard}

                <div className='toolbar'>
                {current == 0 ? (
                    <Button type="button" className="inactive" onClick={() => {}}>Previous</Button>
                ) : (<Button type="button" className="active" onClick={() => {previousHandler()}}>Previous</Button>)}

                {current >= studyCards.length - 1 ? (
                    <Button type="button" className="inactive" onClick={() => {}}>Next</Button>
                ) : (<Button type="button" className="active" onClick={() => {nextHandler()}}>Next</Button>)}
                </div>

            </ul>
        </div>
    );
}