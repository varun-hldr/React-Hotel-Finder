import "../css/hotelCard.css";
import { BOOK, CURRENCY } from "../Logic/DynamicValues";
import { Link } from "react-router-dom";

const HotelCard = (hotel, index) => {
  const onClickButton = (hotelData) => {
    localStorage.setItem("hotelData", JSON.stringify(hotelData));
  };
  return (
    <div key={index} className="mycard">
      <div className="myrow">
        <div className="mycol">
          <img src={hotel.thumb} alt="..." />
        </div>
        <div className="mycol-down">
          <div className="my-card-body">
            <h5 className="card-title">{hotel.name}</h5>
            <p className="card-text">{hotel.city_name}</p>
          </div>
          <div className="button_div d-flex justify-content-between">
            <h5>
              {CURRENCY}
              {hotel.cost}
            </h5>
            <button
              onClick={(e) => onClickButton(hotel)}
              type="button"
              className="btn btn-info"
            >
              <Link to="/booking">{BOOK}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
