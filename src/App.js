import React, { Component } from "react";
import "./App.css";
import { NavBar, Header, BodyArea, Footer } from "./components/Layout";
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
      <div className="App">
        <NavBar
          {...this.state}
          onLogin={this.handleIsLoggedIn}
          setformData={this.handleUserDetails}
        />
        <div className="container-lg">
          {this.headerBody(this.state.isLoaded)}
        </div>
        <Footer />
      </div>
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

  headerBody(isLoaded) {
    if (!isLoaded) {
      return <Loader />;
    }
    if (isLoaded) {
      return (
        <React.Fragment>
          <Header {...this.state} parentCallback={this.handleCallback} />
          <BodyArea {...this.state} parentCallback={this.handleCallback} />
        </React.Fragment>
      );
    }
  }
}

export default App;
