import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQueryParam, StringParam } from "use-query-params";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Img from "react-image";
import "./index.scss";

export const Search = props => {
  const [search] = useQueryParam("query", StringParam);
  const [cat] = useQueryParam("cat", StringParam);
  const [dataMovies, setDataMovies] = useState({ results: [] });
  const [filter] = useState("search");
  const location = useLocation();

  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/" +
        filter +
        "/" +
        cat +
        "?api_key=6ba659c4bce1a142960639ba1731e656&language=en-US&query=" +
        search +
        "&page=1&include_adult=false"
    }).then(response => {
      console.log("cat: " + cat);
      console.log("search: " + search);
      console.log(response.data);
      setDataMovies(response.data);
    });
  }, [search, filter, location, cat]);

  return (
    <main className="content search">
      <div className="container">
        <div className="sidebar">
          <div className="filter">
            <h3>Search Results</h3>
            <ul>
              <li className="selected">
                <Link to={"/search/?cat=movie&query=" + search}>Movies</Link>
                <span>113</span>
              </li>
              <li>
                <Link to={"/search/?cat=tv&query=" + search}>TV Shows</Link>
                <span>10</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="results">
          <div className="top">
            <select name="sort" id="">
              <option value="rating-asc">Rating &#8595;</option>
              <option value="rating-des">Rating &#8593;</option>
            </select>
          </div>
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
                  <h3>
                    {item.title}
                    {item.original_name}
                  </h3>
                  <span className="scrore">
                    (<span className="value">{item.vote_average}</span>)
                  </span>
                </div>
                <span className="release_date">{item.release_date}</span>
                <div className="overview">
                  <p>{item.overview}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="pagination">
            <ReactPaginate pageCount="3" />
          </div>
        </div>
      </div>
    </main>
  );
};
