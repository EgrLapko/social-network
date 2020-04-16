import React from 'react';
import { NavLink } from "react-router-dom";

export const DialogItem = ({ userName, id }) => {
    return (
        <div className="dialog">
          <NavLink to={`dialogs/${id}`} activeClassName="link-active">{userName}</NavLink> 
        </div>
    )
}
