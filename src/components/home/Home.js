import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWeatherByLocation, getFiveDaysWeather } from "../../actions/home";
import WeaklyWeather from "../weekly-weather/WeaklyWeather";
import "./Home.css";
import Search from "../search/Search";
import { getSuggestions } from "../../utils/getSuggestions";
import { useCallback } from "react";

const Home = (props) => {
  const { getFiveDaysWeather, getWeatherByLocation, location } = props;
  const [text, setText] = useState("");
  const [results, setResult] = useState([]);
  const updateCityWeather = useCallback(
    (data) => {
      getFiveDaysWeather(data);
      setText(data.cityName);
      setResult([]);
    },
    [getFiveDaysWeather]
  );
  useEffect(() => {
    if (location.state?.cityKey && location.state?.cityName) {
      updateCityWeather({
        cityKey: location.state?.cityKey,
        cityName: location.state?.cityName,
      });
    } else if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherByLocation(
          position.coords.latitude + "," + position.coords.longitude
        );
      });
    }
  }, [updateCityWeather, location.state, getWeatherByLocation]);
  const handleSearch = (value) => {
    getSuggestions(value).then((result) => {
      setResult(result.data);
    });
    setText(value);
  };

  return (
    <div>
      <Search
        handleSearch={handleSearch}
        updateCityWeather={updateCityWeather}
        results={results}
        text={text}
      />
      <WeaklyWeather />
    </div>
  );
};

Home.propTypes = {
  getWeatherByLocation: PropTypes.func.isRequired,
  getFiveDaysWeather: PropTypes.func.isRequired,
};

export default connect(null, {
  getWeatherByLocation,
  getFiveDaysWeather,
})(Home);
