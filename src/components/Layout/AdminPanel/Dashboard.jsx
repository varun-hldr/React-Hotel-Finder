import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    const adminData = JSON.parse(sessionStorage.getItem("userName"));
    return (
      <div className="container-fluid">
        {adminData.email === this.props.Admin.email && this.props.isLoggedIn ? (
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
          <h2>Please Login as a Admin to visit Dashboard </h2>
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
            onClick={this.props.setCompleted}
            type="button"
            className={
              status === "Pending" ? "btn btn-warning" : "btn btn-info"
            }
            name={start}
            value={status}
          >
            {status}
          </button>
          <button
            onClick={this.props.setCompleted}
            type="button"
            className="btn btn-danger ml-2"
            name={start}
            value="Delete"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
}
