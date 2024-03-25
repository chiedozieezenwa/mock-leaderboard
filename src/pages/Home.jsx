import React from "react";
import {
  BsFileEarmarkCode,
  BsWindowDesktop,
  BsRocket,
  BsPalette,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h1>DASHBOARD</h1>
      </div>

      <div className="main-cards">
        <Link to="products">
          <div className="product-card">
            <div className="card-inner">
              <h2>PRODUCT DESIGN</h2>
              <BsPalette className="card_icon" />
            </div>
            <h1>10</h1>
          </div>
        </Link>

        <Link to="frontend">
          <div className="frontend-card">
            <div className="card-inner">
              <h2>FRONTEND</h2>
              <BsFileEarmarkCode className="card_icon" />
            </div>
            <h1>10</h1>
          </div>
        </Link>

        <Link to="backend">
          <div className="backend-card">
            <div className="card-inner">
              <h2>BACKEND</h2>
              <BsWindowDesktop className="card_icon" />
            </div>
            <h1>10</h1>
          </div>
        </Link>

        <Link to="web3">
          <div className="web3-card">
            <div className="card-inner">
              <h2>WEB3</h2>
              <BsRocket className="card_icon" />
            </div>
            <h1>10</h1>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Home;
