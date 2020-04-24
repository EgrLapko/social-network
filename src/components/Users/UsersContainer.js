import React, { useEffect } from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followUserAC,
  unfollowUserAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/reducers/usersReducer";

import { Users } from "./Users";

const UsersContainer = ({
  users,
  followUser,
  unfollowUser,
  setUsers,
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  setTotalUsersCount,
}) => {
  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
  }, []);

  const onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`
      )
      .then((response) => {
        setUsers(response.data.items);
      });
  };

  return (
    <Users
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      users={users}
      followUser={followUser}
      unfollowUser={unfollowUser}
    />
  );
}; // < ==== Logical component with API Requests

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  followUser: (userId) => dispatch(followUserAC(userId)),
  unfollowUser: (userId) => dispatch(unfollowUserAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
  setTotalUsersCount: (totalCount) =>
    dispatch(setTotalUsersCountAC(totalCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
