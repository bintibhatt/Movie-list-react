import React, { useState } from "react";
import Movie from "./movie";
import MovieName from "./movieName";
import "../css/main.css";
import AddNewMovie from "./addNewMovie";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const handleAddNewMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleCheckBox = (name) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.name === name) {
          return {
            ...movie,
            hasWatched: !movie.hasWatched,
          };
        }
        return movie;
      })
    );
  };

  return (
    <div>
      <AddNewMovie onAddNewMovie={handleAddNewMovie} />
      <h4>All movies</h4>
      {movies.map((movie) => (
        <Movie
          key={movie.name}
          movie={movie}
          handleCheckBox={() => handleCheckBox(movie.name)}
        />
      ))}
      <div className="movieTable">
        <table>
          <thead>
            <tr>
              <th>Watched Movies</th>
              <th>Unwatched Movies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {movies
                  .filter((movie) => movie.hasWatched)
                  .map((movie) => (
                    <MovieName key={movie.name} movie={movie} />
                  ))}
              </td>
              <td>
                {movies
                  .filter((movie) => !movie.hasWatched)
                  .map((movie) => (
                    <MovieName key={movie.name} movie={movie} />
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
