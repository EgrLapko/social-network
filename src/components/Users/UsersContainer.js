import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
} from "../../redux/reducers/usersReducer";

import { Users } from "./Users";
import Spinner from "../common/Spinner/Spinner";
import { compose } from "redux";

const UsersContainer = ({
  users,
  follow,
  unfollow,
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  isFetching,
  followingInProgress,
  getUsers,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, []);

  const onPageChanged = (pageNumber) => {
    getUsers(pageNumber, pageSize);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          users={users}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
        />
      )}
    </>
  );
}; // < ==== Logical component with API Requests

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
})(UsersContainer);
