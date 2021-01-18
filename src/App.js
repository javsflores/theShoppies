import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Nominations from "./Nominations";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);

  const searchMovies = (e) => {
    e.preventDefault();
    const apiKey = 11613196;
    axios
      .get(`http://www.omdbapi.com/?apikey=${apiKey}&`, {
        params: {
          s: searchTerm,
        },
      })
      .then(({ data }) => {
        setMovieList(data.Search);
      });
  };
  return (
    <div>
      <h1>The Shoppies</h1>
      <h3>Movie Title</h3>
      <form onSubmit={(e) => searchMovies(e)}>
        <label>🔍 </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </form>
      <br />
      <Results movieList={movieList} searchTerm={searchTerm} />
      <Nominations />
    </div>
  );
};

export default App;
