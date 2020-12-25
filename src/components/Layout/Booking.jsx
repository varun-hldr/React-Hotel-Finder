import React from "react";
import "../css/booking.css";

const Booking = () => {
  const hotel = JSON.parse(localStorage.getItem("hotelData"));
  const { thumb, name, address, cost, type, tripType } = hotel;
  return (
    <div className="container-fluid booking">
      <div className="myBookingCard">
        <img src={thumb} className="card-img-top" alt={name} />
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Hotel Name</label>
              <input
                value={name}
                type="text"
                className="form-control"
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Hotel Address</label>
              <input
                value={address}
                type="text"
                className="form-control"
                disabled
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
