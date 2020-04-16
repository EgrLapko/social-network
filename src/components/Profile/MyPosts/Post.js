import React from "react";

export const Post = ({ text, likesCount }) => {
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTunqBOtJywMoDdBrMGY_st7jhXN9ujq5g6KE7vlwNWb393nTfV&usqp=CAU";

  return (
    <div className="post">
      <div className="post__avatar">
        <img src={image} alt="avatar" />
      </div>
      <p className="post__text">{ text }</p>
      <p className="likes"> {likesCount} likes </p>
    </div>
  );
};
