import React from "react";
import Spinner from "../common/Spinner/Spinner";
import { NavLink } from "react-router-dom";

export const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  followUser,
  unfollowUser,
}) => {
  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGb5uSA6_aI3eO5D6KDXk-FlqBSVx2jngKy3b5eM3bpBOOCCgc&usqp=CAU";

  let pagesCount = Math.ceil(totalUsersCount / pageSize); // ---- rounding up the pages amount (if 4.2 = 5)

  let pages = [];

  // ---- Defining pages amount for displaying
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div className="users">
      <div className="pagination">
        {pages.map((p) => {
          return (
            <button
              className={`btn ${currentPage === p && "selected"}`}
              onClick={() => onPageChanged(p)}
              key={p}
            >
              {p}
            </button>
          );
        })}
      </div>
      {users.map((user) => {
        return (
          <div className="single-user" key={user.id}>
            <div className="single-user__photo">
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.small != null ? user.photos.small : imgUrl}
                  alt="user-avatar"
                />
              </NavLink>
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
                className="btn selected"
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
