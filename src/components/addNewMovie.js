import React, { useState } from "react";

function AddNewMovie({ onAddNewMovie }) {
  const [newMovie, setNewMovie] = useState({
    name: "",
    releaseDate: "",
    description: "",
    hasWatched: false,
  });

  const getInput = (e) => {
    const { name } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: e.target.value,
      hasWatched: e.target.checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddNewMovie(newMovie);

    setNewMovie({
      name: "",
      releaseDate: "",
      description: "",
      hasWatched: false,
    });

    console.log("New Movie:", newMovie);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Movie name"
          value={newMovie.name}
          onChange={getInput}
        />
        <input
          type="text"
          name="releaseDate"
          placeholder="Release Date"
          value={newMovie.releaseDate}
          onChange={getInput}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={getInput}
        />
        <input
          type="checkbox"
          name="hasWatched"
          onChange={getInput}
          checked={newMovie.hasWatched}
        />
        Has Watched?
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewMovie;
