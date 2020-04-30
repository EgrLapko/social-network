import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Profile from "./Profile";
import { getUserProfile } from "../../redux/reducers/profileReducer";
import Spinner from "../common/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

const ProfileContainer = ({ getUserProfile, profile, match, isAuth }) => {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId);
  }, []);

  return profile === null ? (
    <Spinner />
  ) : (
    <Profile profile={profile} isAuth={isAuth} />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // ====> HOC for redirecting

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
