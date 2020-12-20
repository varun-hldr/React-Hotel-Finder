import React from "react";
import { AuthButton } from "../Logic/Logics";
import { SITETITLE, LOGIN, LOGOUT } from "../Logic/DynamicValues";
import LoginModel from "./LoginForm/LoginModel";

const NavBar = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { onLogin, isLoggedIn, userData } = props;
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">{SITETITLE}</span>
        <form className="d-flex">
          {isLoggedIn ? (
            <button className="btn btn btn-light text-uppercase" disabled>
              Welcome <b>{(" ", userData.name)}</b>
            </button>
          ) : null}
          {isLoggedIn
            ? AuthButton(setModalShow, onLogin, LOGOUT, false)
            : AuthButton(setModalShow, onLogin, LOGIN, true)}
          <LoginModel
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
