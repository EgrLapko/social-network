import React from "react";

export const ProfileInfo = () => {
  const img =
    "https://lovelytab.com/wp-content/uploads/2019/01/animegirls-1548335769001-6533-min-min.jpg";

  return (
    <div className="user-info">
      <div className="image-container">
        <img src={img} alt="content" />
      </div>
      <div className="user-data">Ava + information</div>
    </div>
  );
};
