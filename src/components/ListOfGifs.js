import React, { useEffect, useState } from "react";
import getGifs from "../service/getGifs"
import Gif from "./Gif";

export default function ListOfGifs ({ Keyword }) {
  const [gifs, setGifts] = useState([]);

  useEffect(function () {
    getGifs({ Keyword })
      .then((gifs) => setGifts(gifs));
  }, [Keyword]);

    return gifs.map(({id, title, url}) =>
        <Gif
          key={id}
          id={id}
          title={title}          
          url={url}
          
        />       
    );
}