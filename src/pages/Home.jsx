import React from "react";
import {
  BsFileEarmarkCode,
  BsWindowDesktop,
  BsRocket,
  BsPalette,
} from "react-icons/bs";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h2>PRODUCT DESIGN</h2>
            <BsPalette className="card_icon" />
          </div>
          <h1>150</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h2>FRONTEND</h2>
            <BsFileEarmarkCode className="card_icon" />
          </div>
          <h1>112</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h2>BACKEND</h2>
            <BsWindowDesktop className="card_icon" />
          </div>
          <h1>75</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h2>WEB3</h2>
            <BsRocket className="card_icon" />
          </div>
          <h1>28</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
