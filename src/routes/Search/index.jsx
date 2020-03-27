import React, { useEffect } from "react";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";

//import axios from "axios";

//https://api.themoviedb.org/3/movie/76341?api_key=6ba659c4bce1a142960639ba1731e656

export const Search = props => {
  useEffect(() => {
    //console.log(props);
  });

  return (
    <main className='content discover'>
      <div className='container'>
        <h2>Search</h2>
      </div>
    </main>
  );
};
