import React from "react";

import Logo from "../images/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
    </header>
  );
};
