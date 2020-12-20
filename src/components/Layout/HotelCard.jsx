import "../css/hotelCard.css";
import { BOOK, CURRENCY } from "../Logic/DynamicValues";

const HotelCard = (hotel, index) => {
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
            <button type="button" className="btn btn-info">
              {BOOK}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
