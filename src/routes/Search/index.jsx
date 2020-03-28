import React, { useState, useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import axios from "axios";

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
    <main className='content discover'>
      <div className='container'>
        <h2>Search:</h2>
        <div className='results'>
          {dataMovies.results.map(item => (
            <div className='results' key={item.id}>
              <h3>{item.title}</h3>
              <img
                src={"https://image.tmdb.org/t/p/w300/" + item.poster_path}
                alt={item.title}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
