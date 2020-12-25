import React, { Component } from "react";
import { onCheckHandler } from "../Logic/Logics";
import { PRICE } from "../Logic/DynamicValues";
import "../css/priceFilter.css";

export default class PriceFilter extends Component {
  state = {
    selectedOption: "",
  };
  render() {
    const { searched } = this.props;
    return (
      <div className="form-head text-left">
        <p className="text-left">{PRICE}</p>
        <hr></hr>
        {this.priceFilterElementCreator(2000, 3500, searched)}
        {this.priceFilterElementCreator(3000, 5900, searched)}
        {this.priceFilterElementCreator(6000, 8500, searched)}
      </div>
    );
  }
  priceFilterElementCreator = (less, high, searched) => {
    const { hotels, parentCallback } = this.props;
    return (
      <div className="my-form-check">
        <input
          onChange={(e) => {
            if (e) {
              this.setState({
                selectedOption: e.target.value,
                searched: true,
              });
            }
            onCheckHandler(less, high, hotels, parentCallback);
          }}
          className="form-check-input"
          type="checkbox"
          value={less}
          checked={
            searched ? false : this.state.selectedOption === less ? true : false
          }
        />
        <label className="form-check-label">{`Rs.${less} to Rs.${high}`}</label>
      </div>
    );
  };
}
