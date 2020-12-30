import React, { Component } from "react";

export default class ViewBooking extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.isLoggedIn ? (
          <table className="table table-hover text-uppercase">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Hotel Name</th>
                <th scope="col">Cost</th>
                <th scope="col">StartDate | EndDate</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.dummyData.map((data, index) => {
                return this.makeTable(
                  index,
                  data.userName,
                  data.hotelName,
                  data.cost,
                  data.StartDate,
                  data.EndDate,
                  data.status
                );
              })}
            </tbody>
          </table>
        ) : (
          <h2>Please Login First to View Booking</h2>
        )}
      </div>
    );
  }

  makeTable = (index, name, hotel, cost, start, end, status) => {
    return (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{name}</td>
        <td>{hotel}</td>
        <td>{cost}</td>
        <td>
          <b>{start}</b> | <b>{end}</b>
        </td>
        <td>
          <button
            type="button"
            className={
              status === "Pending" ? "btn btn-warning" : "btn btn-info"
            }
            name={name}
            value={status}
          >
            {status}
          </button>
        </td>
      </tr>
    );
  };
}
