import React from "react";

export default function Meme() {

  return (
    <main className="meme--container">
      <form className="meme--form">
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
        <button type="submit" className="meme--form-btn">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}