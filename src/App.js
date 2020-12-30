import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";
import "./App.css";

const curl = "https://developerfunnel.herokuapp.com/hotellist/1";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    isLoggedIn: false,
    adminLoggedIn: false,
    searched: false,
    hotels: [],
    updatedHotel: [],
    bookingData: {},
    Admin: {
      name: "Admin",
      email: "varun@123",
      password: "12345",
    },
    dummyData: [
      {
        userName: "Rahul",
        hotelName: "Hometel Chandigarh",
        cost: 2419,
        StartDate: "2020-12-27",
        EndDate: "2021-1-2",
        status: "Pending",
      },
    ],
  };
  setCompleted = (e) => {
    const { value, name } = e.target;
    if (value === "Pending") {
      const elementsIndex = this.state.dummyData.findIndex(
        (element) => element.hotelName === name
      );
      let newArray = [...this.state.dummyData];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        status: "Completed",
      };
      this.setState({
        dummyData: newArray,
      });
    }
    if (value === "Delete") {
      const newArray = this.state.dummyData.filter((data) => {
        if (data.hotelName !== name) {
          return data;
        }
      });
      this.setState({
        dummyData: newArray,
      });
    }
  };
  componentDidMount() {
    fetch(curl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            hotels: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    console.log(this.state.dummyData);
    return (
      <Router>
        <div className="App">
          <Layout.NavBar
            {...this.state}
            onLogin={this.handleIsLoggedIn}
            setAdminLoggin={this.setAdminLoggin}
          />
          {this.state.isLoaded ? (
            <div className="_body">
              <Switch>
                <Route exact path="/">
                  <Layout.Header
                    {...this.state}
                    parentCallback={this.handleCallback}
                  />
                  <Layout.BodyArea
                    {...this.state}
                    parentCallback={this.handleCallback}
                  />
                </Route>
                <Route path="/booking">
                  <Layout.Booking
                    {...this.state}
                    setBookingData={this.setBookingData}
                    showBooking={this.showBooking}
                  />
                </Route>
                <Route path="/dashboard">
                  <Layout.Dashboard
                    {...this.state}
                    setCompleted={this.setCompleted}
                  />
                </Route>
                <Route path="/view-booking">
                  <Layout.ViewBooking {...this.state} />
                </Route>
              </Switch>
            </div>
          ) : (
            <Loader />
          )}
          <Layout.Footer />
        </div>
      </Router>
    );
  }

  setBookingData = (booking) => {
    if (booking.userName !== "" && booking.StartDate !== "") {
      this.setState({
        dummyData: [...this.state.dummyData, booking],
      });
    }
  };

  setAdminLoggin = (check) => {
    if (check) {
      this.setState({
        adminLoggedIn: true,
      });
    } else {
      this.setState({
        adminLoggedIn: false,
      });
    }
  };

  handleIsLoggedIn = (data) => {
    if (data) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  };

  handleCallback = (childData, searched) => {
    if (childData) {
      this.setState({
        updatedHotel: childData,
      });
    }
    if (!searched) {
      this.setState({
        searched: false,
      });
    } else {
      this.setState({
        searched: true,
      });
    }
  };
}

export default App;
