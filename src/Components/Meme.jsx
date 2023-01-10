import React from "react";

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "", 
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = React.useState([]);
  
  // React.useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then(res => res.json())
  //     .then(data => setAllMemes(data.data.memes));
  // }, []);
 
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      };
    });
  }

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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
          name="topText"
          value={meme.topText} 
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="meme--form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="meme--form-btn" onClick={getMemeImg}>
          Get a new meme image 🖼
        </button>
        <div className="meme-base-container">
          <img src={meme.randomImg} alt="Dynamically Generated Meme Image" className="meme--img" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}