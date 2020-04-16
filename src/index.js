import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";

const postData = [
  {id: 1, text: "I am writing this just because I can", likesCount: 10},
  {id: 2, text: "This website doesnt work yet!!", likesCount: 15},
  {id: 3, text: "SET ME FREE!", likesCount: 40},
  {id: 4, text: "EXPLOSIVES??!!", likesCount: 0}
]

const dialogUsers = [
  { id: 1, name: "Yehor" },
  { id: 3, name: "Victoria" },
  { id: 3, name: "Moxxi" },
  { id: 4, name: "Dmytro" },
  { id: 5, name: "Mr.Torgue" },
];

const messages = [
  { id: 1, message: "Hello how are you" },
  { id: 2, message: "I was going to feed my fog, but i`ve changed my mind" },
  { id: 3, message: "Do vegans eat bugs" },
  { id: 4, message: "I dont know what to write next" },
  { id: 5, message: "EXPLOSIVES??!" },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postData} dialogUsers={dialogUsers} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
