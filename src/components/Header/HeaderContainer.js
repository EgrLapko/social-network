import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { setAuthUserData } from "../../redux/reducers/authReducer";
import { Header } from "./Header";

const HeaderContainer = ({ setAuthUserData, isAuth, login }) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          setAuthUserData(id, email, login);
          console.log(response)
        }
      });
  }, []);
  return <Header isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
