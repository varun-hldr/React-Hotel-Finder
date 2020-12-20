import React, { Component } from "react";
import onLogin from "./onLogin";
import onSignup from "./onSignup";

export default class LoginForm extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      password: "",
    },
    signUp: false,
  };

  render() {
    return (
      <div>
        {this.state.signUp
          ? onSignup(this.onSubmit, this.onChange, this.setSignUp)
          : onLogin(this.onSubmit, this.onChange, this.setSignUp)}
      </div>
    );
  }
  setSignUp = (check) => {
    this.setState({
      signUp: check,
    });
  };
  onChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };
  onSubmit = (e) => {
    const { onHide, setformData, userData, onLogin } = this.props;
    const { formData } = this.state;
    e.preventDefault();
    if (e.target.name === "login") {
      if (
        userData.email === formData.email &&
        userData.password === formData.password
      ) {
        onHide(true);
        onLogin(true);
      } else {
      }
    }
    if (e.target.name === "signup") {
      this.setSignUp(false);
      setformData(this.state.formData);
      this.setState({
        formData: {
          name: "",
          email: "",
          password: "",
        },
      });
      onHide(true);
    }
  };
}
