import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const GIFS = [
  'https://media1.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47ywwwpeeyvg1iv6yafwrcy32nnn0uetvctz9o4t5m&rid=giphy.gif&ct=g',
  'https://media3.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e471sw64ybhibdsv4ewcenzkjluo3h6dxn5ohbttv3d&rid=giphy.gif&ct=g'
  
]

const DIFERENT_GIFS = [
  'https://media2.giphy.com/media/mCRJDo24UvJMA/200.webp?cid=ecf05e47g8mcucsj4tu1fvygrici09csfv20dyi1fkfgcuvs&rid=200.webp&ct=g'
]

function App() {
  const [gifs, setGifts] = useState(GIFS)
  
  return (
    <div className="App">
      <section className="App-header">
        {
          gifs.map(singleGifs => <img src={singleGifs}/>) 
        }
        <button onClick={() => setGifts(DIFERENT_GIFS)}>CAMBIAR GIFTS</button>
       
      </section>
    </div>
  );
}

export default App;
