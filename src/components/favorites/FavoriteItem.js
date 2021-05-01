import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentWeather, removeFromFavorite } from "../../actions/favorite";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FavoriteItem = (props) => {
  const {
    getCurrentWeather,
    removeFromFavorite,
    favorite = {},
    celsiusToggle,
  } = props;

  const { cityKey = 1234, cityName = "" } = favorite;

  const initialState = {
    icon: "",
    text: "",
    temperature: "",
    cityName: "",
    cityKey: "",
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    getCurrentWeather(cityKey)
      .then((result) => {
        setState({
          icon: `https://vortex.accuweather.com/adc2010/images/slate/icons/${result.data[0].WeatherIcon}.svg`,
          text: result.data[0].WeatherText,
          temperature: result.data[0].Temperature,
          cityName: cityName,
          cityKey: cityKey,
        });
      })
      .catch((err) => console.log(err));
  }, [getCurrentWeather, cityName, cityKey]);

  const removeItem = (cityKey) => {
    removeFromFavorite(cityKey);
  };

  return (
    <div className="weather-side flex-item">
      <Link to={{ pathname: "/", state: { cityKey, cityName } }}>
        <h3 className="weather-desc">{state.cityName}</h3>
        <h3 className="weather-desc">{state.text}</h3>
        <img className="favorite-img-icon" src={state.icon} alt="icon" />
        <h1 className="weather-temp">
          {state.temperature[!celsiusToggle ? "Imperial" : "Metric"]?.Value}°
          {state.temperature[!celsiusToggle ? "Imperial" : "Metric"]?.Unit}
        </h1>
      </Link>
      <div>
        <FontAwesomeIcon
          className="remove-favorite-icon"
          icon={faTrash}
          onClick={() => removeItem(cityKey)}
        />
      </div>
    </div>
  );
};

FavoriteItem.propTypes = {
  removeFromFavorite: PropTypes.func.isRequired,
  getCurrentWeather: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  celsiusToggle: state.home.celsiusToggle,
});

export default connect(mapStateToProps, {
  removeFromFavorite,
  getCurrentWeather,
})(FavoriteItem);
