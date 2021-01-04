import React, { Component } from "react";
import axios from "axios";
import onLogin from "./onLogin";
import onSignup from "./onSignup";

export default class LoginForm extends Component {
  state = {
    adminData: [],
    userData: [],
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

  componentDidMount = () => {
    axios.get("https://hotel-json-server.herokuapp.com/users").then((respone) =>
      this.setState({
        userData: respone.data,
      })
    );
    axios.get("https://hotel-json-server.herokuapp.com/admin").then((respone) =>
      this.setState({
        adminData: respone.data,
      })
    );
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
    e.preventDefault();
    const { adminData, userData, signUpformData, loginformData } = this.state;
    const { onHide, onLogin, setAdminLoggin, setUserData } = this.props;
    if (e.target.name === "login") {
      adminData.map((data) => {
        if (
          data.email === loginformData.email &&
          data.password === loginformData.password
        ) {
          const userData = {
            user: "admin",
            name: data.name,
          };
          setUserData(userData);
          this.setState({
            text: "",
          });
          onHide(true);
          onLogin(true);
          setAdminLoggin(true);
        } else {
          userData.map((data) => {
            if (
              data.email === loginformData.email &&
              data.password === loginformData.password
            ) {
              const userData = {
                user: "user",
                name: data.name,
              };
              setUserData(userData);
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
          });
        }
      });
    }
    if (e.target.name === "signup") {
      axios.post(
        "https://hotel-json-server.herokuapp.com/users",
        signUpformData
      );
      this.setSignUp(false);
      onHide(true);
    }
  };
}
