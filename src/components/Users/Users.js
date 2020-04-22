import React, { useEffect } from "react";
import * as axios from "axios";

const Users = ({ users, followUser, unfollowUser, setUsers }) => {


  useEffect(() => {
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      setUsers(response.data.items);
    });
  }, [])

  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGb5uSA6_aI3eO5D6KDXk-FlqBSVx2jngKy3b5eM3bpBOOCCgc&usqp=CAU";

  return (
    <div className="users">
      {users.map((user) => {
        return (
          <div className="single-user" key={user.id}>
            <div className="single-user__photo">
              <img src={user.photos.small != null ? user.photos.small : imgUrl} alt="user-avatar" />
            </div>
            <div className="single-user__info">
              <h4 className="user-name">{user.name}</h4>
              <p className="user-status">{user.status}</p>
              <div className="user-location">
                <p className="loc-item">
                  {"user.location.country"}, {"user.location.city"}
                </p>
              </div>
            </div>
            {user.followed ? (
              <button
                className="btn followed"
                onClick={() => unfollowUser(user.id)}
              >
                Unfollow
              </button>
            ) : (
              <button className="btn" onClick={() => followUser(user.id)}>
                Follow
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
