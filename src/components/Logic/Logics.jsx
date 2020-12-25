export const newUpdatedHotel = (hotels, updatedHotel) => {
  if (updatedHotel.length !== 0) {
    return updatedHotel;
  } else {
    return hotels;
  }
};

export const AuthButton = (setModalShow, onLogin, value, check) => {
  return (
    <button
      onClick={(e) => {
        if (value === "LOGOUT") {
          onLogin(false);
        }
        setModalShow(check);
      }}
      className="btn btn-outline-success me-2"
      type="button"
      name={value}
    >
      {value}
    </button>
  );
};

export const onCheckHandler = (less, high, hotels, parentCallback) => {
  const updatedData = hotels.filter((hotel) => {
    if (hotel.cost > less && hotel.cost < high) {
      return hotel;
    }
  });
  parentCallback(updatedData, false);
};

export const dropDownElementCreator = (
  name,
  hotels,
  stateCity,
  onChangeHandler
) => {
  return (
    <select
      onChange={onChangeHandler}
      className="text-uppercase"
      name={name}
      id={name}
    >
      <option>--Select {name}--</option>
      {hotels.map((hotel, index) => {
        if (hotel.city_name === stateCity) {
          if (name === "Hotel")
            return (
              <option key={index} value={hotel.name}>
                {hotel.name}
              </option>
            );
        }
        if (name === "City") {
          return (
            <option key={index} value={hotel.city_name}>
              {hotel.city_name}
            </option>
          );
        }
      })}
    </select>
  );
};

export const searchHandler = (e, hotels, parentCallback, city) => {
  const updatedData = hotels.filter((data) => {
    if (data.city_name === city) {
      return data;
    }
  });
  if (e) {
    parentCallback(updatedData, true);
  }
};
