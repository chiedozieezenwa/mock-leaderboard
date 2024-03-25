import React from "react";
import {
  BsCart3,
  BsFileEarmarkCode,
  BsWindowDesktop,
  BsRocket,
  BsPalette,
  BsGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> LEARNABLE
        </div>
        <span className="icon close-icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/">
          <li className="sidebar-list-item">
            <BsCart3 className="icon" /> Dashboard
          </li>
        </Link>
        <Link to="products">
          <li className="sidebar-list-item">
            <BsPalette className="icon" /> Product Design
          </li>
        </Link>
        <Link to="frontend">
          <li className="sidebar-list-item">
            <BsFileEarmarkCode className="icon" /> Frontend
          </li>
        </Link>
        <Link to="backend">
          <li className="sidebar-list-item">
            <BsWindowDesktop className="icon" /> Backend
          </li>
        </Link>
        <Link to="web3">
          <li className="sidebar-list-item">
            <BsRocket className="icon" /> Web3
          </li>
        </Link>
        <Link to="">
          <li className="sidebar-list-item">
            <BsGearFill className="icon" /> Settings
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
