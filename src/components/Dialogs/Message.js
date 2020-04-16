import React from 'react'

export const Message = ({ message }) => {
    return (
        <div className="message">
            <p className="message__text"> {message} </p>
        </div>
    )
}
