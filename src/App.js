import React from "react";
import { Switch, Route } from "react-router-dom";

import "./style.css";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/Sidebar/SideBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className="content">
        <Switch>
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/news" component={News} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
