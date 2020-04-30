import React from "react";
import { Switch, Route } from "react-router-dom";

import "./style.css";
import { SideBar } from "./components/Sidebar/SideBar";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SideBar />
      <div className="content">
        <Switch>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" component={DialogsContainer}/>
          <Route path="/news" component={News} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
