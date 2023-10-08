import React, { useState } from "react";
import { Link } from 'react-router-dom';


import "./Home.css"; // 确保路径正确
import up from "./pic/up.png";
import down from "./pic/down.png";
import homebg from "./pic/homebg.jpg";

function Home() {
  const [showWarning, setShowWarning] = useState(false);

  const handleNoButtonClick = () => {
    setShowWarning(true);
  };

  const handleYesButtonClick = () => {
    setShowWarning(false); // 点击 "I want to know" 按钮时隐藏警告消息
  };

  return (
    <div className="container">
      <div className="svg-container">
        <img className="bg-image" src={homebg} alt="" />
        <img className="up-image" src={up} alt="" />
        <img className="down-image" src={down} alt="" />
        <h1 className="title">Aquatic Adventurers</h1>
        <div className="content"></div>
        <p className="description">
          "Have you ever wondered where water comes from, and why it's important
          for us to cherish it?"
        </p>
        <div className="button-container">
          <Link to="/swotinfo">
            <button className="yes-button">I want to know</button>
          </Link>

          <button className="no-button" onClick={handleNoButtonClick}>
            I don't care
          </button>
        </div>
        {showWarning && (
          <p className="warning">
            I hope you care, because four billion people are facing severe water
            scarcity.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
