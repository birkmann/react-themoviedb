import React, { useState, useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import axios from "axios";

export const Search = props => {
  const [search] = useQueryParam("query", StringParam);
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    /*
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/search/movie?api_key=6ba659c4bce1a142960639ba1731e656&language=en-US&query=" +
        search +
        "&page=1&include_adult=false"
    }).then(response => {
      console.log(response.data);
      setData(response.data);
    });
    */

    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <main className="content discover">
      <div className="container">
        <h2>Search:</h2>
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
