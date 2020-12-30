import React from "react";
import { Link } from "react-router-dom";
import { AuthButton } from "../Logic/Logics";
import { SITETITLE, LOGIN, LOGOUT } from "../Logic/DynamicValues";
import LoginModel from "./LoginForm/LoginModel";
import "../css/navbar.css";

const NavBar = (props) => {
  const userData = JSON.parse(localStorage.getItem("signUpData"));
  const [modalShow, setModalShow] = React.useState(false);
  const { onLogin, isLoggedIn, setAdminLoggin, Admin } = props;
  const loginData = JSON.parse(sessionStorage.getItem("userName"));
  const validateName = (Admin, userData, loginData) => {
    if (loginData.email == Admin.email) {
      return (
        <div>
          <Link
            to="/view-booking"
            className="btn btn btn-light text-uppercase"
            disabled
          >
            View Booking
          </Link>
          <Link
            to="/dashboard"
            className="btn btn btn-light text-uppercase"
            disabled
          >
            Dashboard
          </Link>
          <button className="btn btn btn-light text-uppercase" disabled>
            Welcome <b>{Admin.name}</b>
          </button>
        </div>
      );
    }
    if (loginData.email == userData.email) {
      return (
        <div>
          <Link
            to="/view-booking"
            className="btn btn btn-light text-uppercase"
            disabled
          >
            View Booking
          </Link>
          <button className="btn btn btn-light text-uppercase" disabled>
            Welcome <b>{userData.name}</b>
          </button>
        </div>
      );
    }
    return null;
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          <Link to="/">{SITETITLE}</Link>
        </span>

        <form className="d-flex">
          {isLoggedIn ? validateName(Admin, userData, loginData) : null}
          {isLoggedIn
            ? AuthButton(setModalShow, onLogin, LOGOUT, false)
            : AuthButton(setModalShow, onLogin, LOGIN, true)}
          <LoginModel
            setAdminLoggin={setAdminLoggin}
            show={modalShow}
            onHide={() => setModalShow(false)}
            {...props}
          />
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
