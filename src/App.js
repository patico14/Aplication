import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=xFcdXd43xKNG5f7GoLvvzmFHrttOlYL1&q=pand&limit=25&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifts] = useState([])

  useEffect(function(){
    fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => image.images.downsized_medium)
      setGifts(gifs)
  })
    // setGifts(DIFERENT_GIFS)
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
