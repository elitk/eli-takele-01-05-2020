import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWeatherByLocation, getFiveDaysWeather } from "../../actions/home";
import WeaklyWeather from "../weekly-weather/WeaklyWeather";
import "./Home.css";
import Search from "../search/Search";
import { getSuggestions } from "../../utils/getSuggestions";

const Home = (props) => {
  const { getFiveDaysWeather, getWeatherByLocation, location } = props;
  const [text, setText] = useState("");
  const [results, setResult] = useState([]);

  useEffect(() => {
    if (location.state?.cityKey && location.state?.cityName) {
      updateCityWeather({
        cityKey: location.state?.cityKey,
        cityName: location.state?.cityName,
      });
      location.state = undefined;
    } else if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherByLocation(
          position.coords.latitude + "," + position.coords.longitude
        );
      });
    }
  }, []);
  const handleSearch = (value) => {
    getSuggestions(value).then((result) => {
      setResult(result.data);
    });
    setText(value);
  };
  const updateCityWeather = (data) => {
    getFiveDaysWeather(data);
    setText(data.cityName);
    setResult([]);
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
