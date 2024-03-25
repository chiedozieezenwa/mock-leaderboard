import React from "react";
import { BsPalette } from "react-icons/bs";
import { productDesign } from "../components/Data";

function Products() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>PRODUCT DESIGN</h3>
      </div>

      <div className="path-cards">
        {productDesign.slice(0, 3).map((item) => (
          <div className="card">
            <div className="card-inner">
              <h2>{item.name}</h2>
              <BsPalette className="card_icon" />
            </div>
            <h1>{item.grade}</h1>
          </div>
        ))}
      </div>

      <table className="interns-table">
        <thead>
          <tr>
            <th>RANK</th>
            <th>INTERN NAME</th>
            <th>ATTENDANCE</th>
            <th>Task 1 (10)</th>
            <th>Task 2 (10)</th>
            <th>GRADE</th>
          </tr>
        </thead>
        <tbody>
          {productDesign.map((item) => (
            <tr>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              <td>{item.attendance}</td>
              <td>{item.task1}</td>
              <td>{item.task2}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Products;
