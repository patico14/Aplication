import React, { useState } from "react";
import "./App.css";


import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState('cat')

  return (
    <div className="App">
      <section className="App-header">
        <button onClick={() => setKeyword('dog')}>cambiar keyword</button>
      <ListOfGifs Keyword={keyword}/>
      </section>
    </div>
  );
}

export default App;
