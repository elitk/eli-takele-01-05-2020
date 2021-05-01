import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { toggleNightMode, toggleCelsiusMode } from "../../actions/home";
import { connect } from "react-redux";
import {
  faCloudSun,
  faHeart,
  faHome,
  faMoon,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleMobileNavbar } from "../../utils/toggleMobileNavbar";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const { toggleNightMode, toggleCelsiusMode } = props;
  return (
    <nav className={`navbar`}>
      <div id="navbar-toggle-mobile" className="navbar">
        <div className="navbar-content">
          <div className="navbar-header">
            <div className="icon-container">
              <FontAwesomeIcon icon={faCloudSun} />
            </div>
            Herolo Weather
          </div>
          <ul>
            <li onClick={() => toggleMobileNavbar()}>
              <Link to="/">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faHome} />
                </div>
                Home
              </Link>
            </li>
            <li onClick={() => toggleMobileNavbar()}>
              <Link to="/favorites">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                Favorites
              </Link>
            </li>
          </ul>
          <ul className="switches">
            <li className="switch-btn">
              <div className="icon-container">
                <FontAwesomeIcon icon={faTemperatureHigh} />
              </div>
              Celsius mode{" "}
              <div className="switch">
                <input
                  onChange={() => toggleCelsiusMode()}
                  id="switch"
                  type="checkbox"
                />
                <label htmlFor="switch"></label>
              </div>
            </li>
            <li className="switch-btn">
              <div className="icon-container">
                <FontAwesomeIcon icon={faMoon} />
              </div>
              Night mode{" "}
              <div className="switch">
                <input
                  onChange={() => toggleNightMode()}
                  id="switch2"
                  type="checkbox"
                />
                <label htmlFor="switch2"></label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleCelsiusMode: PropTypes.func.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
};

export default connect(null, { toggleNightMode, toggleCelsiusMode })(Navbar);
