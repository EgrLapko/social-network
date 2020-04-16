import React from "react";

export const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li className="menu-item">
          <a href="/">ProfilFe</a>
        </li>
        <li className="menu-item">
          <a href="/">Messages</a>
        </li>
        <li className="menu-item">
          <a href="/">News</a>
        </li>
        <li className="menu-item">
          <a href="/">Music</a>
        </li>
        <li className="menu-item">
          <a href="/">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
