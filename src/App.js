import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar, Header, BodyArea, Footer, Booking } from "./components/Layout";
import Loader from "./components/Loader/Loader";

const curl = "https://developerfunnel.herokuapp.com/hotellist/1";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    isLoggedIn: false,
    hotels: [],
    updatedHotel: [],
    searched: false,
    userData: {
      name: "",
      email: "",
      password: "",
    },
  };
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar
            {...this.state}
            onLogin={this.handleIsLoggedIn}
            setformData={this.handleUserDetails}
          />
          {this.state.isLoaded ? (
            <Switch>
              <Route exact path="/">
                <Header {...this.state} parentCallback={this.handleCallback} />
                <BodyArea
                  {...this.state}
                  parentCallback={this.handleCallback}
                />
              </Route>
              <Route path="/booking">
                <Booking {...this.state} />
              </Route>
            </Switch>
          ) : (
            <Loader />
          )}
          <Footer />
        </div>
      </Router>
    );
  }
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

  handleUserDetails = (props) => {
    this.setState({
      userData: props,
    });
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
