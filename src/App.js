import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Favorites from "./components/favorites/Favorites";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleMobileNavbar } from "./utils/toggleMobileNavbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="app-container">
            <div id="navbar-toggle-mobile" className="navbar-toggle-mobile">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => toggleMobileNavbar()}
              />
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </div>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
