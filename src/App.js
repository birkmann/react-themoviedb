import React from "react";
import "./App.scss";

function handleSubmit(e) {
  e.preventDefault();
  console.log("submit");
}

function App() {
  return (
    <div className='movie-search'>
      <header className='main'>
        <div className='container'>
          <a href='/' className='logo'>
            <img
              src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'
              alt=''
            />
          </a>
        </div>
      </header>
      <div className='form-wrapper'>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <i class='material-icons icon-search'>search</i>
            <input
              type='text'
              placeholder='Search for a movie, tv show, person...'
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
