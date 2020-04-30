import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  addMessage,
  updateNewMessage,
} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

const DialogsContainer = ({
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
    <Dialogs
      dialogsUsers={dialogsUsers}
      messages={messages}
      onMessageChange={onMessageChange}
      messageText={messageText}
      createMessage={createMessage}
    />
  );
};

const mapStateToProps = (state) => ({
  messageText: state.dialogsPage.messageText,
  dialogsUsers: state.dialogsPage.dialogsUsers,
  messages: state.dialogsPage.messages,
});

export default compose(
  connect(mapStateToProps, {
    addMessage,
    updateNewMessage,
  }),
  withAuthRedirect
)(DialogsContainer);
