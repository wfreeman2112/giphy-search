import React, { useState } from "react";

export default function App() {
  const [gifs, setGifs] = useState([{}]);
  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/search?q=shaq&api_key=Du3xTBd5SS58qmw6FL2Dv4EFJmAh1LcW&limit=10"
      );
      const data = await response.json();
      const gifs = data.data;
      console.log("data", data)
      console.log(gifs);
      console.log(gifs.images)
      setGifs(gifs);
    } catch (err) {
      console.log(err.response);
    }
  };
  const gifList = gifs.map(gif => <img className="gif" src={gif.images.original.url}/>);
  return (
    <div>
      <button onClick={handleClick}>Get Gifs</button>
      {gifList}
    </div>
  );
}
