import React from "react";

import "./style.css";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/Sidebar/SideBar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className="content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
