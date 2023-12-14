import React from "react";
import PropTypes from "prop-types";

function Movie({ movie, handleCheckBox }) {
  const { name, releaseDate, description, hasWatched } = movie;

  return (
    <div>
      <li>
        Movie name: <b>{name}</b>, Release Date: <b>{releaseDate}</b>,
        Description: <b>{description}</b>, Has Watched:
        <b>
          {hasWatched ? (
            <input
              type="checkbox"
              defaultChecked={hasWatched}
              onClick={handleCheckBox}
            />
          ) : (
            <input
              type="checkbox"
              defaultChecked={hasWatched}
              onClick={handleCheckBox}
            />
          )}
        </b>
      </li>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    releaseDate: PropTypes.string,
    description: PropTypes.string,
    hasWatched: PropTypes.bool,
  }),
  handleCheckBox: PropTypes.func,
};

Movie.defaultProps = {
  movie: {
    name: "No movie name",
    releaseDate: "No release date",
    description: "No description",
    hasWatched: false,
  },
  handleCheckBox: () => {},
};

export default Movie;
