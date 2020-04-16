import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = ({ posts }) => {
    return (
    <div className="profile-content">
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};
