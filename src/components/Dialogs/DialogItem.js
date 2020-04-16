import React from "react";
import { NavLink } from "react-router-dom";

export const DialogItem = ({ userName, id, img }) => {
  return (
    <div className="dialog">
      <div className="dialog__avatar">
        <img src={img} alt="user-avatar" />
      </div>
      <NavLink className="dialog__username" to={`dialogs/${id}`} activeClassName="link-active">
        {userName}
      </NavLink>
    </div>
  );
};
