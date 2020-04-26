import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = ({ profile }) => {
  return (
    <div className="profile-content">
      <ProfileInfo profile={profile} />
      <MyPosts />
    </div>
  );
};

export default Profile;
