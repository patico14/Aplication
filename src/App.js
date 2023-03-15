import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./service/getGifs";

import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [gifs, setGifts] = useState([]);

  useEffect(function () {
    getGifs({ Keyword: "cat " }).then((gifs) => setGifts(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-header">
      <ListOfGifs gifs={gifs}/>
      </section>
    </div>
  );
}

export default App;
