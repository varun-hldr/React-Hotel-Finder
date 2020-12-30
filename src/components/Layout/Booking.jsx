import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/booking.css";

export default class Booking extends Component {
  state = {
    bookingData: {
      userName: "",
      hotelName: "",
      cost: "",
      HotelType: "",
      TripType: "",
      StartDate: "",
      EndDate: "",
      status: "Pending",
    },
  };

  render() {
    const hotel = JSON.parse(sessionStorage.getItem("hotelData"));
    return (
      <div className="container-fluid booking">
        <div className="myBookingCard">
          <img src={hotel.thumb} className="card-img-top" alt={hotel.name} />
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Hotel Name</label>
                <input
                  value={hotel.name}
                  type="text"
                  className="form-control"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Hotel Address</label>
                <input
                  value={hotel.address}
                  type="text"
                  className="form-control"
                  disabled
                />
              </div>

              <div className="d-flex justify-content-evenly">
                <div className="hotelType">
                  {this.dropDownHandler("HotelType", hotel.type, hotel)}
                </div>
                <div className="tripType">
                  {this.dropDownHandler("TripType", hotel.tripType, hotel)}
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="startDateDiv">
                  <label className="form-label labelDate">Start Date: </label>
                  <br />
                  <input
                    onChange={(e) =>
                      this.onChangeHandler(e, "StartDate", hotel)
                    }
                    type="date"
                    className="bookingDate"
                  />
                </div>
                <div className="endDateDiv">
                  <label className="form-label labelDate">End Date: </label>
                  <br />
                  <input
                    onChange={(e) => this.onChangeHandler(e, "EndDate", hotel)}
                    type="date"
                    className="bookingDate"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label myCost">₹{hotel.cost}</label>
              </div>

              <button
                onClick={this.onSubmit}
                type="button"
                className="btn btn-dark "
              >
                <Link to="/view-booking" className="bookingButton">
                  Submit
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  onSubmit = (e) => {
    const { setBookingData } = this.props;
    e.preventDefault();
    setBookingData(this.state.bookingData);
    // sessionStorage.setItem("bookingData", booking);
    // const data = this.state.bookingData;
    // let newData = "";
    // const completeData = JSON.parse(sessionStorage.getItem("completeData"));
    // if (completeData === null) {
    //   newData = [data];
    // } else {
    //   newData = [...completeData, data];
    //   showBooking();
    // }
    // sessionStorage.setItem("completeData", JSON.stringify(newData));
  };

  onChangeHandler = (e, value, hotel) => {
    const userData = JSON.parse(localStorage.getItem("signUpData"));
    this.setState({
      bookingData: {
        ...this.state.bookingData,
        userName: userData.name,
        hotelName: hotel.name,
        cost: hotel.cost,
        [value]: e.target.value,
      },
    });
  };

  dropDownHandler = (value, type, hotel) => {
    return (
      <select
        className="text-uppercase BookingSelect"
        onChange={(e) => this.onChangeHandler(e, value, hotel)}
      >
        <option>--Select {value}--</option>
        {type.map((hotel, index) => {
          return (
            <option key={index} value={hotel.name}>
              {hotel.name}
            </option>
          );
        })}
      </select>
    );
  };
}
