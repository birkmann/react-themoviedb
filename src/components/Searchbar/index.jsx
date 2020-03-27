import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
//import axios from "axios";

//https://api.themoviedb.org/3/movie/76341?api_key=6ba659c4bce1a142960639ba1731e656

export const Searchbar = props => {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    history.push("/search/?query=" + event.target.query.value);
  };
  return (
    <div className='form-wrapper'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <i className='material-icons icon-search'>search</i>
          <input
            type='text'
            name='query'
            placeholder='Search for a movie, tv show, person...'
          />
        </form>
      </div>
    </div>
  );
};
