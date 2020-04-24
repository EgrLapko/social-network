import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserAC,
  unfollowUserAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/reducers/usersReducer";

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
  setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
