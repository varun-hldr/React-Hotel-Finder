import React, { Component } from "react";
import onLogin from "./onLogin";
import onSignup from "./onSignup";

export default class LoginForm extends Component {
  state = {
    signUpformData: {
      name: "",
      email: "",
      password: "",
    },
    loginformData: {
      email: "",
      password: "",
    },
    text: "",
    signUp: false,
  };

  render() {
    return (
      <div>
        <h5>{this.state.text}</h5>
        {this.state.signUp
          ? onSignup(this.onSubmit, this.onChangeSignup, this.setSignUp)
          : onLogin(this.onSubmit, this.onChangeLogin, this.setSignUp)}
      </div>
    );
  }

  setSignUp = (check) => {
    this.setState({
      signUp: check,
      signUpformData: {
        name: "",
        email: "",
        password: "",
      },
    });
  };

  onChangeLogin = (e) => {
    this.setState({
      loginformData: {
        ...this.state.loginformData,
        [e.target.name]: e.target.value,
      },
    });
  };
  onChangeSignup = (e) => {
    this.setState({
      signUpformData: {
        ...this.state.signUpformData,
        [e.target.name]: e.target.value,
      },
    });
  };
  onSubmit = (e) => {
    const data = JSON.parse(localStorage.getItem("signUpData"));
    const { onHide, onLogin, setAdminLoggin, Admin } = this.props;
    const { signUpformData, loginformData } = this.state;
    e.preventDefault();
    if (e.target.name === "login") {
      if (
        loginformData.email === Admin.email &&
        loginformData.password === Admin.password
      ) {
        onHide(true);
        onLogin(true);
        sessionStorage.setItem("userName", JSON.stringify(loginformData));
        setAdminLoggin(true);
      } else {
        if (
          data.email === loginformData.email &&
          data.password === loginformData.password
        ) {
          sessionStorage.setItem("userName", JSON.stringify(loginformData));
          this.setState({
            text: "",
          });
          onHide(true);
          onLogin(true);
        } else {
          this.setState({
            text: "Invalid email and password",
          });
        }
      }
    }
    if (e.target.name === "signup") {
      localStorage.setItem("signUpData", JSON.stringify(signUpformData));
      this.setSignUp(false);
      onHide(true);
    }
  };
}
