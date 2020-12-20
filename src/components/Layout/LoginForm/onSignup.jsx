import React from "react";

const onSignup = (onSubmit, onChange, setSignUp) => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Your Full Name</label>
        <input
          onChange={(e) => onChange(e)}
          name="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          onChange={(e) => onChange(e)}
          name="email"
          type="email"
          className="form-control"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          onChange={(e) => onChange(e)}
          name="password"
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button className="btn btn btn-light" disabled>
          I already have an account
        </button>
        <button
          onClick={(e) => setSignUp(false)}
          type="button"
          className="btn btn-link"
        >
          <b>Login</b>
        </button>
      </div>
      <button
        onClick={(e) => onSubmit(e)}
        type="submit"
        className="btn btn-primary"
        name="signup"
      >
        SIGNUP
      </button>
    </form>
  );
};

export default onSignup;
