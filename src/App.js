import React, { useEffect, useState } from 'react'
import './App.css';
import getGifs from './service/getGifs';


function App() {
  const [gifs, setGifts] = useState([])

  useEffect(function () {
    getGifs({Keyword: 'rick' }).then(gifs => setGifts(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-header">
        {
          gifs.map(singleGifs => <img src={singleGifs}/>) 
        }

       
      </section>
    </div>
  );
}

export default App;
