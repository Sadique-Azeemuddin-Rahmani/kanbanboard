import React from "react";
import { BiWorld, BiFilter, BiDotsHorizontalRounded } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="nav-title">Kanban Board</h1>

      <div className="nav-divider"></div>

      <div className="nav-btn">
        <span className="nav-btn-icon">
          <BiWorld />
        </span>
        <span className="nav-btn-text">Public</span>
      </div>

      <div className="nav-divider"></div>

      <span className="nav-member">AH</span>

      <div className="nav-filter-div">
        <div className="nav-divider"></div>

        <div className="nav-btn">
          <span className="nav-btn-icon">
            <BiFilter />
          </span>
          <span className="nav-btn-text">Filter</span>
        </div>

        <div className="nav-btn">
          <span className="nav-btn-icon">
            <BiDotsHorizontalRounded />
          </span>
          <span className="nav-btn-text">Show menu</span>
        </div>
      </div>
    </nav>
  );
}
