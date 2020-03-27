import React from "react";
import "./index.scss";
//import axios from "axios";

//https://api.themoviedb.org/3/movie/76341?api_key=6ba659c4bce1a142960639ba1731e656

function handleSubmit(e) {
  e.preventDefault();
  console.log("submit");
}

export const Searchbar = props => {
  return (
    <div className='form-wrapper'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <i className='material-icons icon-search'>search</i>
          <input
            type='text'
            placeholder='Search for a movie, tv show, person...'
          />
        </form>
      </div>
    </div>
  );
};
