import React from "react";
import memesData from "../Data/memesData";

export default function Meme() {

  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }

  return (
    <main className="meme--container">
      <div className="meme--form">
        <input 
          type="text" 
          placeholder="Top text"
          className="meme--form-input"          
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="meme--form-input"
        />
        <button className="meme--form-btn" onClick={getMemeImg}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}