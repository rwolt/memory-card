import React from 'react';
import '../styles/Card.css';

function Card(props) {
    return(
        <div
            className="card"
            onClick={props.handleClick}
            id={props.id}>
            <img className="card-image" src={props.image} alt={props.name} />
            <p className="card-name">{props.name}</p>
        </div>
    )
}

export default Card;