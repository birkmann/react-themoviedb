import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useQueryParam, StringParam } from "use-query-params";
import axios from "axios";

import "./index.scss";

export const Searchbar = props => {
  const [search] = useQueryParam("query", StringParam);

  const [searchValue, setSearchValue] = useState(search);

  const handleChange = event => {
    setSearchValue(event.target.value);
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/search/movie?api_key=6ba659c4bce1a142960639ba1731e656&language=en-US&query=" +
        searchValue +
        "&page=1&include_adult=false"
    }).then(response => {
      console.log(response.data);
    });
  };

  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    history.push("/search/?cat=movie&query=" + event.target.query.value);
    window.location.reload(false);
  };
  return (
    <div className='form-wrapper'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <i className='material-icons icon-search'>search</i>
          <input
            type='text'
            name='query'
            value={searchValue}
            onChange={handleChange}
            placeholder='Search for a movie, tv show, person...'
          />
        </form>
      </div>
    </div>
  );
};
