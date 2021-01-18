import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Nominations from "./Nominations";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [nominationsList, setNominationsList] = useState([]);

  const searchMovies = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?apikey=${11613196}&`, {
        params: {
          s: searchTerm,
          type: "movie",
        },
      })
      .then(({ data }) => {
        if (data.Response === "False") {
          return setMovieList(["No Results"]);
        }
        setMovieList(data.Search);
      });
  };

  const addNomination = (movieTitle) => {
    if (nominationsList.length >= 5) {
      return;
    }
    for (var i = 0; i < nominationsList.length; i++) {
      if (nominationsList[i] === movieTitle) {
        return;
      }
    }
    const newNominationList = nominationsList.slice();
    newNominationList.push(movieTitle);
    setNominationsList(newNominationList);
  };

  const removeNomination = (index) => {
    const newNominationsList = nominationsList.slice();
    newNominationsList.splice(index, 1);

    setNominationsList(newNominationsList);
  };

  return (
    <div>
      <h1 className="title">The Shoppies</h1>

      <div className="searchContainer">
        <h3>Movie Title</h3>
        <form onSubmit={(e) => searchMovies(e)}>
          <div className="ui search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search movie(s)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
      <div className="resultsContainer">
        <Results
          movieList={movieList}
          searchTerm={searchTerm}
          addNomination={addNomination}
          nominationsList={nominationsList}
        />
        <Nominations
          nominationsList={nominationsList}
          removeNomination={removeNomination}
        />
      </div>
    </div>
  );
};

export default App;
