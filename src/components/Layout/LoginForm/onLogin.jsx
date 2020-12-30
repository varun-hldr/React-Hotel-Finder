import React from "react";

const onLogin = (onSubmit, onChangeLogin, setSignUp) => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          onChange={(e) => onChangeLogin(e)}
          name="email"
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          onChange={(e) => onChangeLogin(e)}
          name="password"
          type="password"
          className="form-control "
        />
      </div>
      <div className="mb-3">
        <button className="btn btn btn-light" disabled>
          New User?
        </button>
        <button
          onClick={(e) => setSignUp(true)}
          type="button"
          className="btn btn-link"
        >
          <b>Sign Up</b>
        </button>
      </div>
      <button
        onClick={(e) => onSubmit(e)}
        type="submit"
        className="btn btn-primary"
        name="login"
      >
        LOGIN
      </button>
    </form>
  );
};

export default onLogin;
