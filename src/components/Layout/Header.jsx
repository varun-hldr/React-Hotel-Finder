import React, { Component } from "react";
import { dropDownElementCreator, searchHandler } from "../Logic/Logics";
import { CITY, HOTEL, SEARCH } from "../Logic/DynamicValues";
import "../css/header.css";

class Header extends Component {
  state = {
    city: "",
    hotel: "",
    check: true,
  };
  render() {
    const { hotels, parentCallback } = this.props;
    return (
      <div className="container-lg header ">
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col">
              {dropDownElementCreator(
                CITY,
                hotels,
                this.state.city,
                this.onChangeHandler
              )}
            </div>
            <div className="col">
              {dropDownElementCreator(
                HOTEL,
                hotels,
                this.state.city,
                this.onChangeHandler
              )}
            </div>
            <div className="col">
              <button
                onClick={(e) =>
                  searchHandler(e, hotels, parentCallback, this.state.city)
                }
                type="button"
                className="btnn"
              >
                {SEARCH}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onChangeHandler = (e) => {
    if (e.target.name == CITY) {
      this.setState({
        city: e.target.value,
        check: false,
      });
    } else {
      this.setState({
        hotel: e.target.value,
      });
    }
  };
}
export default Header;
