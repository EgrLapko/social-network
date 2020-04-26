import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/reducers/profileReducer";
import Spinner from "../common/Spinner/Spinner";
import { withRouter } from "react-router-dom";

const ProfileContainer = ({ setUserProfile, profile, match }) => {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
        userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        setUserProfile(response.data);
      });
  }, []);

  return profile === null ? <Spinner /> : <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let ContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ContainerWithUrlData
);
