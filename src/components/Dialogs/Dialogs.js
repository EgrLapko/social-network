import React from "react";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";

export const Dialogs = ({ dialogUsers, messages }) => {
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {dialogUsers.map((user) => (
          <DialogItem userName={user.name} key={user.id} id={user.id} />
        ))}
      </div>
      <div className="dialogs__messages">
        {messages.map((msg) => (
          <Message message={msg.message} key={msg.id} />
        ))}
      </div>
    </div>
  );
};
