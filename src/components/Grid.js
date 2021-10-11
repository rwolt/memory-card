import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/Grid.css';

function Grid(props) {

    const generateRandomCharacters = () => {
        let nextCharacters = [];
        while(nextCharacters.length < 12) {
            //A Choose a random character from all available characters
            let randomIndex = Math.floor(Math.random() * props.characters.length);
            let randomCharacter = props.characters[randomIndex];
            //If the nextCharacters array doesn't already include the random character, push it to the array
            if (!nextCharacters.includes(randomCharacter)) {
                nextCharacters.push(randomCharacter);
            }
        }
        return nextCharacters;
    }

    useEffect(() => {
        setCurrentCharacters(generateRandomCharacters());
    }, [props.characters]);

    const [currentCharacters, setCurrentCharacters] = useState(generateRandomCharacters());

    const handleClick = (e) => {
        const {id} = e.currentTarget;
        console.log(id);
    };

    return(
        <div className="grid">
            {currentCharacters.map(character => {
                return(
                    <Card key={character.id} id={character.id} name={character.name} image={character.image} handleClick={handleClick} />
                )
            })}
        </div>
    )
}

export default Grid;