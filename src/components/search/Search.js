import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Search.css";
const Search = (props) => {
  const { text, updateCityWeather, handleSearch, results } = props;

  return (
    <div className="search-container">
      <div className="flex-container-search">
        <FontAwesomeIcon className="arrow-back" icon={faArrowLeft} />
        <div className="input-container">
          <input
            value={text}
            onChange={(e) => handleSearch(e.target.value)}
            onClick={(e) => handleSearch(e.target.value)}
            placeholder="Search a city..."
          />
        </div>
        <FontAwesomeIcon icon={faSearch} />
        {results.length > 0 && (
          <div className="suggestions-container">
            <ul>
              {results.map((result) => {
                return (
                  <li
                    key={result.Key}
                    onMouseDown={() => {
                      updateCityWeather({
                        cityKey: result.Key,
                        cityName: result.LocalizedName,
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />{" "}
                    {`${result.LocalizedName}, ${result.Country.LocalizedName}`}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
