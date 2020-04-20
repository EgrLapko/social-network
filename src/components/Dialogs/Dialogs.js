import React from "react";
import { connect } from "react-redux";

import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import {
  addMessage,
  updateNewMessage,
} from "../../redux/reducers/dialogsReducer";

const Dialogs = ({
  messageText,
  addMessage,
  updateNewMessage,
  dialogsUsers,
  messages,
}) => {
  const createMessage = () => {
    const messageBody = {
      id: Date.now().toString(),
      message: messageText,
    };
    addMessage(messageBody);
  };

  const onMessageChange = (e) => {
    let message = e.target.value;
    updateNewMessage(message);
  };

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

const mapStateToProps = (state) => ({
  messageText: state.dialogsPage.messageText,
  dialogsUsers: state.dialogsPage.dialogsUsers,
  messages: state.dialogsPage.messages,
});

const mapDispatchToProps = dispatch => ({
  addMessage: (message) => dispatch(addMessage(message)),
  updateNewMessage: (text) => dispatch(updateNewMessage(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
