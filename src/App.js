import React from "react";
import { Switch, Route } from "react-router-dom";

import "./style.css";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/Sidebar/SideBar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

const App = ({ posts, dialogUsers, messages }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className="content">
        <Switch>
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route path="/dialogs" render={() => <Dialogs dialogUsers={dialogUsers} messages={messages} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
