import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";

import { state } from "./redux/state";

const { postData } = state.profilePage;
const { dialogUsers, messages } = state.dialogsPage;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        posts={postData}
        dialogUsers={dialogUsers}
        messages={messages}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
