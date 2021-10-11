import React from 'react';
import '../styles/Card.css';

function Card(props) {
    return(
        <div
            className="card"
            onClick={props.handleClick}
            id={props.id}>
            <img className="card-image" src={process.env.PUBLIC_URL + `/images/${props.image}`} alt={props.name} />
            <p className="card-name">{props.name}</p>
        </div>
    )
}

export default Card;