import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Favorites.css";
import FavoriteItem from "./FavoriteItem";

const Favorites = (props) => {
  const { favorites } = props;
  return (
    <div className="favorite-container">
      <h1>Favorites</h1>
      <div className="flex-container">
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => {
            return <FavoriteItem key={index} favorite={favorite} />;
          })
        ) : (
          <div className={"empty-favorite"}>no have favorites</div>
        )}
      </div>
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.favorite.favorites,
  favoritesLen: state.favorite.favorites.length,
});

export default connect(mapStateToProps, {})(Favorites);
