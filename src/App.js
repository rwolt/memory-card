import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.js'

function App() {
  const [characters, setCharacters] = useState([
    {name: 'Baby Luigi', image: 'babyluigi.png'},
    {name: 'Baby Mario', image: 'babymario.png'},
    {name: 'Bowser', image: 'bowser.png'},
    {name: 'Cranky Kong', image: 'crankykong.png'},
    {name: 'Daisy', image: 'daisy.png'},
    {name: 'Diddy Kong', image: 'diddykong.png'},
    {name: 'Dixie Kong', image: 'dixiekong.png'},
    {name: 'Donkey Kong', image: 'donkeykong.png'},
    {name: 'Funky Kong', image: 'funkykong.png'},
    {name: 'Goomba', image: 'goomba.png'},
    {name: 'Kameck', image: 'kameck.png'},
    {name: 'Koopa Troopa', image: 'koopatroopa.png'},
    {name: 'Link', image: 'link.png'},
    {name: 'Luigi', image: 'luigi.png'},
    {name: 'Mario', image: 'mario.png'},
    {name: 'Peach', image: 'peach.png'},
    {name: 'Poochy', image: 'poochy.png'},
    {name: 'Princess Zelda', image: 'princesszelda.png'},
    {name: 'Rambi', image: 'rambi.png'},
    {name: 'Rosalina', image: 'rosalina.png'},
    {name: 'Shy Guy', image: 'shyguy.png'},
    {name: 'Snowmads', image: 'snowmads.png'},
    {name: 'Tiki Tak Tribe', image: 'tikitaktribe.png'},
    {name: 'Toad', image: 'toad.png'},
    {name: 'Toadette', image: 'toadette.png'},
    {name: 'Waluigi', image: 'waluigi.png'},
    {name: 'Wario', image: 'wario.png'},
    {name: 'Yoshi', image: 'yoshi.png'},
  ]);

  return (
    <div className="App">
      <p className="score"></p>
      <p className="high-score"></p>
      <div className="grid">
        {characters.map(character => {
          return(
            <Card name={character.name} image={character.image} />
          )
        })}
      </div>
    </div>
  );
}
export default App;
