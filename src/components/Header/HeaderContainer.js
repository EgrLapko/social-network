import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAuthUserData } from "../../redux/reducers/authReducer";
import { Header } from "./Header";

const HeaderContainer = ({ isAuth, login, getAuthUserData }) => {
  useEffect(() => {
    getAuthUserData()
  }, []);
  return <Header isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  getAuthUserData
})(HeaderContainer);
