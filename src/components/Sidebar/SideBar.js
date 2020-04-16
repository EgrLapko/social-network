import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li className="menu-item">
          <NavLink className="link" to="/profile" activeClassName="link-active">
            Profile
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            className="link"
            to="/dialogs"
            activeClassName="link-active"
          >
            Messages
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink className="link" to="/news" activeClassName="link-active">
            News
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink className="link" to="/music" activeClassName="link-active">
            Music
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            className="link"
            to="/settings"
            activeClassName="link-active"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
