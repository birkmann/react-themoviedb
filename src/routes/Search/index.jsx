import React, { useState, useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import axios from "axios";
import Img from "react-image";
import "./index.scss";

export const Search = props => {
  const [search] = useQueryParam("query", StringParam);
  const [dataMovies, setDataMovies] = useState({ results: [] });

  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/search/movie?api_key=6ba659c4bce1a142960639ba1731e656&language=en-US&query=" +
        search +
        "&page=1&include_adult=false"
    }).then(response => {
      console.log(response.data);
      setDataMovies(response.data);
    });
  }, [search]);

  return (
    <main className="content search">
      <div className="container">
        <div className="sidebar">
          <div className="filter">
            <h3>Search Results</h3>
            <ul>
              <li className="selected">
                <a href="/search/movie?query=titanic">Movies</a>
                <span>113</span>
              </li>
              <li>
                <a href="/search/tv?query=titanic">TV Shows</a>
                <span>10</span>
              </li>
              <li>
                <a href="/search/people?query=titanic">People</a>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="results">
          {dataMovies.results.map(item => (
            <div className="card" key={item.id}>
              <div className="poster">
                <Img
                  src={[
                    "https://image.tmdb.org/t/p/w300/" + item.poster_path,
                    "https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png"
                  ]}
                  alt={item.title}
                />
              </div>
              <div className="details">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <span className="release_date">{item.release_date}</span>
                <div className="overview">
                  <p>{item.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
