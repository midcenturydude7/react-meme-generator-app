import React from "react";
import logo from "../img/troll-face.png";

export default function Header() {
  
  return (
    <header className="header--container">
      <div className="header--logo__container">
        <img src={logo} alt="Troll Face - The Meme Generator Logo" className="header--logo-img" />
        <h1 className="header--logo-title">Meme Generator</h1>
      </div>
      <div className="header--course-info">
        <h3>React Course - Project 3</h3>
      </div>
    </header>
  );
}