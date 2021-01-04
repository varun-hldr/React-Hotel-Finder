import React, { Component } from "react";
import axios from "axios";

export default class Dashboard extends Component {
  state = {
    dummyData: [],
    isLoadded: false,
  };

  componentDidMount = () => {
    axios
      .get("https://hotel-json-server.herokuapp.com/booking")
      .then((response) => {
        this.setState({
          dummyData: response.data,
          isLoadded: true,
        });
      });
  };
  render() {
    const { userData } = this.props;
    return (
      <div className="container-fluid">
        {userData.user === "admin" && this.props.isLoggedIn ? (
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
              {this.state.dummyData.map((data) => {
                return this.makeTable(
                  data.id,
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

  editHandler = (e) => {
    if (e.target.value === "Pending") {
      const hotel = this.state.dummyData.filter(
        (data) => e.target.name == data.id
      );
      let newHotel = {};
      hotel.map(
        (data) =>
          (newHotel = {
            ...data,
            status: "Completed",
          })
      );
      axios.put(
        `https://hotel-json-server.herokuapp.com/booking/${e.target.name}`,
        newHotel
      );
    }
  };

  deleteHandler = (e) => {
    axios.delete(
      `https://hotel-json-server.herokuapp.com/booking/${e.target.name}`
    );
  };
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
            onClick={this.editHandler}
            type="button"
            className={
              status === "Pending" ? "btn btn-warning" : "btn btn-info"
            }
            name={index}
            value={status}
          >
            {status}
          </button>
          <button
            onClick={this.deleteHandler}
            type="button"
            className="btn btn-danger ml-2"
            name={index}
            value="Delete"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
}
