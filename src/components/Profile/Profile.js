import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  const img = "https://lovelytab.com/wp-content/uploads/2019/01/animegirls-1548335769001-6533-min-min.jpg";

  return (
    <div className="profile-content">
      <div className="image-container">
        <img src={img} alt="content" />
      </div>
      <MyPosts />
    </div>
  );
};
