import React from "react";

const Results = ({ searchTerm, movieList, addNomination, nominationsList }) => {
  return (
    <div>
      <h3>Results for "{searchTerm}":</h3>
      <ul className="ui big list">
        {movieList.map((movie) => {
          if (movie === "No Results") {
            return <li key="0">No results, please try another search.</li>;
          }
          let status = "Nominate";
          for (let i = 0; i < nominationsList.length; i++) {
            if (
              movie.Title === nominationsList[i] ||
              nominationsList.length >= 5
            ) {
              status = "Nominated";
            }
          }
          return (
            <li key={movie.imdbID}>
              {movie.Title}
              <button
                onClick={(e) => {
                  addNomination(movie.Title);
                }}
                className={`mini ui ${
                  status === "Nominated" ? "disabled" : ""
                } button`}
              >
                {status}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
