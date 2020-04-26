import React from "react";

import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

export const Header = ({ isAuth, login }) => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <div className="login">
        {isAuth ? <p>{login}</p> : <NavLink to="/login">Log in</NavLink>}
      </div>
    </header>
  );
};
