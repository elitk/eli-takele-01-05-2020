import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./WeaklyWeather.css";
import { connect } from "react-redux";
import Spinner from "../spinner/Spinner";
import WeakItem from "./WeakItem";
import { addToFavorite, removeFromFavorite } from "../../actions/favorite";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCelsiusTemperature } from "../../utils/getCelsiusTemperature";
import WeaklyWeatherHeader from "./WeaklyWeatherHeader";

const WeaklyWeather = (props) => {
  const {
    nightToggle,
    celsiusToggle,
    favorites,
    addToFavorite,
    removeFromFavorite,
    weakWeather,
    loading,
    city,
  } = props;
  toast.configure({
    position: "top-right",
    autoClose: 4000,
    draggable: false,
    hideProgressBar: true,
  });
  const addCityToFavorite = () => {
    const data = {
      cityName: city.EnglishName || city.cityName,
      weakWeather: weakWeather,
      cityKey: city.Key || city.cityKey,
    };
    addToFavorite(data);
    toast.success(
      `${city.EnglishName || city.cityName} was add to your favorites`
    );
  };
  const removeCityFromFavorite = () => {
    removeFromFavorite(city.Key || city.cityKey);
    toast.error(
      `${city.EnglishName || city.cityName} was removed from your favorites`
    );
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <main class="main-container">
          <WeaklyWeatherHeader
            removeCityFromFavorite={removeCityFromFavorite}
            addCityToFavorite={addCityToFavorite}
            favorites={favorites}
            nightToggle={nightToggle}
            celsiusToggle={celsiusToggle}
            weakWeather={weakWeather}
            city={city}
          />

          <div class="current-stats">
            <div>
              <div class="current-stats__value">
                {`${
                  celsiusToggle
                    ? getCelsiusTemperature(
                        weakWeather[0].Temperature.Maximum.Value
                      )
                    : `${weakWeather[0].Temperature.Maximum.Value}°
                  ${weakWeather[0].Temperature.Maximum.Unit}`
                }`}
              </div>
              <div class="current-stats__label">High</div>
              <div class="current-stats__value">
                {`${
                  celsiusToggle
                    ? getCelsiusTemperature(
                        weakWeather[0].Temperature.Minimum.Value
                      )
                    : `${weakWeather[0].Temperature.Minimum.Value}°
                  ${weakWeather[0].Temperature.Minimum.Unit}`
                }`}
              </div>
              <div class="current-stats__label">Low</div>
            </div>
            <div>
              <div class="current-stats__value">
                {weakWeather[0][nightToggle ? "Day" : "Night"].HasPrecipitation
                  ? "✓"
                  : "✗"}
              </div>
              <div class="current-stats__label">Precipitation</div>
              <div class="current-stats__value">
                {weakWeather[0][nightToggle ? "Day" : "Night"].HasPrecipitation
                  ? weakWeather[0][nightToggle ? "Day" : "Night"]
                      .PrecipitationType
                  : "✗"}
              </div>
              <div class="current-stats__label">PrecipitationType</div>
            </div>
          </div>
          <div class="next-5-days">
            <h2 class="next-5-days__heading">Next 5 days</h2>
            <div class="next-5-days__container">
              {weakWeather.length > 0 ? (
                weakWeather.map((weakItem, index) => {
                  return (
                    <WeakItem
                      key={index}
                      weakItem={weakItem}
                      nightToggle={nightToggle}
                      celsiusToggle={celsiusToggle}
                    />
                  );
                })
              ) : (
                <h4>no the country</h4>
              )}
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
};

WeaklyWeather.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  weakWeather: state.home.weakWeather,
  city: state.home.city,
  loading: state.home.loading,
  favoriteCount: state.favorite.favorites.length,
  favorites: state.favorite.favorites,
  nightToggle: state.home.nightToggle,
  celsiusToggle: state.home.celsiusToggle,
});

export default connect(mapStateToProps, { addToFavorite, removeFromFavorite })(
  WeaklyWeather
);
