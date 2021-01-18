import React from "react";

const Results = ({ searchTerm, movieList }) => {
  return (
    <div>
      <h3>Results for "{searchTerm}"</h3>
      <ul>
        {movieList.map((movie) => {
          return (
            <li key={movie.imdbID}>
              {movie.Title}
              <button> Nominate</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
