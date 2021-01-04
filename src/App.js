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
    hotel: [],
    userData: {},
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
    return (
      <Router>
        <div className="App">
          <Layout.NavBar
            {...this.state}
            setUserData={this.setUserData}
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
                    hotelCallback={this.setSelectedHotel}
                  />
                </Route>
                <Route path="/booking">
                  <Layout.Booking {...this.state} />
                </Route>
                <Route path="/dashboard">
                  <Layout.Dashboard {...this.state} />
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

  // Navbar Functions Start Here

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

  setUserData = (data) => {
    this.setState({
      userData: data,
    });
  };

  // NAvbar functions End Here

  // Header & Bodyarea functions Start Here

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

  setSelectedHotel = (hotel) => {
    this.setState({
      hotel: hotel,
    });
  };
  // Header & Bodyarea functions End Here
}

export default App;
