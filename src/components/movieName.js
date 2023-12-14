import React from "react";

function MovieName({ movie }) {
  const { name } = movie;

  return (
    <div>
      <li>
        <b>{name}</b>
      </li>
    </div>
  );
}

export default MovieName;
