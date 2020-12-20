import React, { Component } from "react";
import loader from "../img/loader.gif";
import "../css/loader.css";

class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader">
          <img src={loader} alt="loader" />
        </div>
      </div>
    );
  }
}

export default Loader;
