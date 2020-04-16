import React from "react";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";

export const Dialogs = ({ dialogUsers, messages }) => {
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {dialogUsers.map((user) => (
          <DialogItem
            userName={user.name}
            key={user.id}
            id={user.id}
            img={user.img}
          />
        ))}
      </div>
      <div className="dialogs__messages">
        <div className="msg-container">
          {messages.map((msg) => (
            <Message message={msg.message} key={msg.id} />
          ))}
        </div>
        <div className="textinput">
          <textarea className="input-area" />
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};
