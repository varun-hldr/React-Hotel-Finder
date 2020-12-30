import React from "react";
import HotelCard from "./HotelCard";
import PriceFilter from "./PriceFilter";
import "../css/bodyArea.css";
import { newUpdatedHotel } from "../Logic/Logics";
import { HOTELLIST, FILTERS } from "../Logic/DynamicValues";

const BodyArea = (props, parentCallback) => {
  let hotels = newUpdatedHotel(props.hotels, props.updatedHotel);
  return (
    <div className="container-lg _body">
      <hr></hr>
      <div className="row main_row">
        <div className="col-4">
          <h6 className="text-left" style={{ marginLeft: "5px" }}>
            {FILTERS}
          </h6>
          <PriceFilter {...props} {...parentCallback} />
        </div>
        <div className="mycolB">
          <h6 className="text-center" style={{ marginLeft: "5px" }}>
            {HOTELLIST}
          </h6>
          <div className="row">
            {hotels.map((hotel, index) => {
              return HotelCard(hotel, index, props.isLoggedIn);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyArea;
