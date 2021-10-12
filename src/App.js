import React, { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Header from './components/Header.js';
import Grid from './components/Grid.js'
import {babyluigi,
        babymario,
        bowser,
        crankykong,
        daisy,
        diddykong,
        dixiekong,
        donkeykong,
        funkykong,
        goomba,
        kameck,
        koopatroopa,
        link,
        luigi,
        mario,
        peach,
        poochy,
        princesszelda,
        rambi,
        rosalina,
        shyguy,
        snowmads,
        tikitaktribe,
        toad,
        toadette,
        waluigi,
        wario,
        yoshi } from './images';


function App() {
  const [characters, setCharacters] = useState([
    {id: uniqid(), name: 'Baby Luigi', image: babyluigi, selected: false},
    {id: uniqid(), name: 'Baby Mario', image: babymario, selected: false},
    {id: uniqid(), name: 'Bowser', image: bowser, selected: false},
    {id: uniqid(), name: 'Cranky Kong', image: crankykong, selected: false},
    {id: uniqid(), name: 'Daisy', image: daisy, selected: false},
    {id: uniqid(), name: 'Diddy Kong', image: diddykong, selected: false},
    {id: uniqid(), name: 'Dixie Kong', image: dixiekong, selected: false},
    {id: uniqid(), name: 'Donkey Kong', image: donkeykong, selected: false},
    {id: uniqid(), name: 'Funky Kong', image: funkykong, selected: false},
    {id: uniqid(), name: 'Goomba', image: goomba, selected: false},
    {id: uniqid(), name: 'Kameck', image: kameck, selected: false},
    {id: uniqid(), name: 'Koopa Troopa', image: koopatroopa, selected: false},
    {id: uniqid(), name: 'Link', image: link, selected: false},
    {id: uniqid(), name: 'Luigi', image: luigi, selected: false},
    {id: uniqid(), name: 'Mario', image: mario, selected: false},
    {id: uniqid(), name: 'Peach', image: peach, selected: false},
    {id: uniqid(), name: 'Poochy', image: poochy, selected: false},
    {id: uniqid(), name: 'Princess Zelda', image: princesszelda, selected: false},
    {id: uniqid(), name: 'Rambi', image: rambi, selected: false},
    {id: uniqid(), name: 'Rosalina', image: rosalina, selected: false},
    {id: uniqid(), name: 'Shy Guy', image: shyguy, selected: false},
    {id: uniqid(), name: 'Snowmads', image: snowmads, selected: false},
    {id: uniqid(), name: 'Tiki Tak Tribe', image: tikitaktribe, selected: false},
    {id: uniqid(), name: 'Toad', image: toad, selected: false},
    {id: uniqid(), name: 'Toadette', image: toadette, selected: false},
    {id: uniqid(), name: 'Waluigi', image: waluigi, selected: false},
    {id: uniqid(), name: 'Wario', image: wario, selected: false},
    {id: uniqid(), name: 'Yoshi', image: yoshi, selected: false}
  ]);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const handleClick = (e) => {
    const {id} = e.currentTarget;
    const clicked = characters.filter(character => character.id === id);
    if(clicked[0].selected === false) {
      setCharacters(characters.map(character => {
        return(
          character.id === id ? {...character, selected: true} : {...character}
        )
      }))
      setScore(score + 1);
    } else {
      if(score > best) {
        setBest(score);
      }
      setScore(0);
      setCharacters(characters.map(character => {
        return(
          {...character, selected: false}
        )}));
  }
}


  return (
    <div className="App">
      <Header score={score} best={best} />
      <Grid characters={characters} handleClick={handleClick} />
    </div>
  );
}


export default App;
