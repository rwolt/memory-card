import React, { useEffect } from 'react';
import '../styles/Card.css';
import {cardback} from '../images';

function Card(props) {

    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.flip-card-inner').forEach(element => {
                element.classList.add('flip');
            });
        }, 1000);

        return(
            () => {document.querySelectorAll('.flip-card-inner').forEach(element => {
                element.classList.remove('flip');
            });}
        )
    });

    return(
        <div
            className="flip-card"
            onClick={props.handleClick}
            id={props.id}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="card-back-image" src={cardback} alt="stylized card back" />
                </div>
                <div className="flip-card-back">
                    <img className="card-image" src={props.image} alt={props.name} />
                    <p className="card-name">{props.name}</p>
                </div>
            </div>

        </div>
    )
}

export default Card;