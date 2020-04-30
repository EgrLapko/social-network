import React from "react";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile }) => {
  const img =
    "https://lovelytab.com/wp-content/uploads/2019/01/animegirls-1548335769001-6533-min-min.jpg";

  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGb5uSA6_aI3eO5D6KDXk-FlqBSVx2jngKy3b5eM3bpBOOCCgc&usqp=CAU";

  return (
    <div className="user-info">

      <div className="image-container">
        <img src={img} alt="content" />
      </div>

      <div className="user-data">

        <div className="user-avatar">
          <img src={profile.photos.large === null ? defaultImg : profile.photos.large} alt="user-avatar" />
        </div>

        <div className="info">
          <h2 className="user-name">{profile.fullName}</h2>
          <ProfileStatus />
          <h3 className="about-me"> {profile.aboutMe} </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
