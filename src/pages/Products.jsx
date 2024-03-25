import React from "react";
import { productDesign } from "../components/Data";

function Products() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h1>PRODUCT DESIGN</h1>
      </div>

      <div className="path-cards">
        {productDesign.slice(0, 3).map((item) => (
          <div className="card">
            <div className="path-card-inner">
              <img src={item.medal} alt="" />
              <h2>{item.name}</h2>
            </div>
            <h1>{item.total}</h1>
          </div>
        ))}
      </div>

      <table className="interns-table">
        <thead>
          <tr>
            <th>RANK</th>
            <th>INTERN NAME</th>
            <th>INTERN AVATAR</th>
            <th>ATTENDANCE</th>
            <th>APPRAISAL</th>
            <th>Task 1 (10)</th>
            <th>Task 2 (10)</th>
            <th>Task 3 (10)</th>
            <th>Task 4 (10)</th>
            <th>Task 5 (10)</th>
            <th>Task 6 (10)</th>
            <th>Task 7 (10)</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {productDesign.map((item) => (
            <tr>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              <td>
                <div className="avatar">
                  <img src={item.intern} alt="" />
                </div>
              </td>
              <td>{item.attendance}</td>
              <td>{item.appraisal}</td>
              <td>{item.task1}</td>
              <td>{item.task2}</td>
              <td>{item.task3}</td>
              <td>{item.task4}</td>
              <td>{item.task5}</td>
              <td>{item.task6}</td>
              <td>{item.task7}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Products;
