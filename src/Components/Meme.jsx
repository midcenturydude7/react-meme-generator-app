import React from "react";
import memesData from "../Data/memesData";

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "", 
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  // const [memeImg, setMemeImg] = React.useState("http://i.imgflip.com/1bij.jpg");

  function getMemeImg() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }));
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
        <div className="meme--img-container">
          <img src={meme.randomImg} alt="Dynamically Generated Meme Image" className="meme--img" />
        </div>
      </div>
    </main>
  );
}