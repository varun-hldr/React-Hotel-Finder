import React from "react";
import { BOOK, CURRENCY } from "../Logic/DynamicValues";
import { Link } from "react-router-dom";
import "../css/hotelCard.css";

const HotelCard = (hotel, index, isLoggedIn) => {
  const onClickButton = (hotelData) => {
    sessionStorage.setItem("hotelData", JSON.stringify(hotelData));
  };
  const buttonValidation = (isLoggedIn) => {
    if (isLoggedIn) {
      return (
        <button
          onClick={(e) => onClickButton(hotel)}
          type="button"
          className="btn btn-info"
        >
          <Link to="/booking">{BOOK}</Link>
        </button>
      );
    } else {
      return (
        <button type="button" className="btn btn-info text-uppercase">
          Please Login First
        </button>
      );
    }
  };
  return (
    <div key={index} className="mycard">
      <div className="myrow">
        <div className="mycol">
          <img src={hotel.thumb} alt="..." />
        </div>
        <div className="mycol-down">
          <div className="my-card-body">
            <h5 className="card-title">{hotel.name}</h5>
            <p className="card-text">{hotel.city_name}</p>
          </div>
          <div className="button_div d-flex justify-content-between">
            <h5>
              {CURRENCY}
              {hotel.cost}
            </h5>
            {buttonValidation(isLoggedIn)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
