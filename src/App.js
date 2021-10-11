import React, { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Grid from './components/Grid.js'

function App() {
  const [characters, setCharacters] = useState([
    {id: uniqid(), name: 'Baby Luigi', image: 'babyluigi.png', selected: false},
    {id: uniqid(), name: 'Baby Mario', image: 'babymario.png', selected: false},
    {id: uniqid(), name: 'Bowser', image: 'bowser.png', selected: false},
    {id: uniqid(), name: 'Cranky Kong', image: 'crankykong.png', selected: false},
    {id: uniqid(), name: 'Daisy', image: 'daisy.png', selected: false},
    {id: uniqid(), name: 'Diddy Kong', image: 'diddykong.png', selected: false},
    {id: uniqid(), name: 'Dixie Kong', image: 'dixiekong.png', selected: false},
    {id: uniqid(), name: 'Donkey Kong', image: 'donkeykong.png', selected: false},
    {id: uniqid(), name: 'Funky Kong', image: 'funkykong.png', selected: false},
    {id: uniqid(), name: 'Goomba', image: 'goomba.png', selected: false},
    {id: uniqid(), name: 'Kameck', image: 'kameck.png', selected: false},
    {id: uniqid(), name: 'Koopa Troopa', image: 'koopatroopa.png', selected: false},
    {id: uniqid(), name: 'Link', image: 'link.png', selected: false},
    {id: uniqid(), name: 'Luigi', image: 'luigi.png', selected: false},
    {id: uniqid(), name: 'Mario', image: 'mario.png', selected: false},
    {id: uniqid(), name: 'Peach', image: 'peach.png', selected: false},
    {id: uniqid(), name: 'Poochy', image: 'poochy.png', selected: false},
    {id: uniqid(), name: 'Princess Zelda', image: 'princesszelda.png', selected: false},
    {id: uniqid(), name: 'Rambi', image: 'rambi.png', selected: false},
    {id: uniqid(), name: 'Rosalina', image: 'rosalina.png', selected: false},
    {id: uniqid(), name: 'Shy Guy', image: 'shyguy.png', selected: false},
    {id: uniqid(), name: 'Snowmads', image: 'snowmads.png', selected: false},
    {id: uniqid(), name: 'Tiki Tak Tribe', image: 'tikitaktribe.png', selected: false},
    {id: uniqid(), name: 'Toad', image: 'toad.png', selected: false},
    {id: uniqid(), name: 'Toadette', image: 'toadette.png', selected: false},
    {id: uniqid(), name: 'Waluigi', image: 'waluigi.png', selected: false},
    {id: uniqid(), name: 'Wario', image: 'wario.png', selected: false},
    {id: uniqid(), name: 'Yoshi', image: 'yoshi.png', selected: false}
  ]);

  return (
    <div className="App">
      <p className="score">Score: </p>
      <p className="high-score">Best: </p>
      <Grid characters={characters} />
    </div>
  );
}
export default App;
