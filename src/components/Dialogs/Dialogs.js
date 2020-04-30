import React from "react";

import { DialogItem } from "./DialogItem";
import { Message } from "./Message";

const Dialogs = ({ 
  dialogsUsers,
  messages,
  onMessageChange,
  messageText,
  createMessage,
}) => {
  
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {dialogsUsers.map((user) => (
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
          <textarea
            className="input-area"
            onChange={onMessageChange}
            value={messageText}
          />
          <button className="btn" onClick={() => createMessage()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
