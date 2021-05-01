import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getCelsiusTemperature } from "../../utils/getCelsiusTemperature";

const WeaklyWeatherHeader = (props) => {
  const {
    favorites,
    addCityToFavorite,
    removeCityFromFavorite,
    nightToggle,
    celsiusToggle,
    weakWeather,
    city,
  } = props;
  return (
    <>
      <div className="location-and-date">
        <div>
          <h1 className="location-and-date__location">
            {city?.EnglishName || city?.cityName || ""}
          </h1>
          {new Date(`${weakWeather[0].Date}`).toDateString()}
        </div>
        {favorites.find(
          (favorite) =>
            favorite.cityKey === city?.Key || favorite.cityKey === city?.cityKey
        ) ? (
          <FontAwesomeIcon
            icon={faHeart}
            size="2x"
            color="red"
            className="favorite-btn-add"
            onClick={() => removeCityFromFavorite()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            size="2x"
            color="white"
            className="favorite-btn-remove"
            onClick={() => addCityToFavorite()}
          />
        )}
      </div>

      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img
            className="img-icon"
            src={`https://vortex.accuweather.com/adc2010/images/slate/icons/${
              weakWeather[0][nightToggle ? "Day" : "Night"].Icon
            }.svg`}
            alt="icon"
          />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">
            {celsiusToggle
              ? getCelsiusTemperature(
                  weakWeather[0].Temperature[
                    nightToggle ? "Maximum" : "Minimum"
                  ].Value
                )
              : `${
                  weakWeather[0].Temperature[
                    nightToggle ? "Maximum" : "Minimum"
                  ].Value
                }°F`}
          </div>
          <div className="current-temperature__summary">
            {weakWeather[0][nightToggle ? "Day" : "Night"].IconPhrase}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeaklyWeatherHeader;
