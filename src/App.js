import React, { useEffect, setData } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

function handleSubmit(e) {
  e.preventDefault();
  console.log("submit");
}

function App() {
  return (
    <Router>
      <div className='movie-search'>
        <header className='main'>
          <div className='container'>
            <a href='/' className='logo'>
              <img
                src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'
                alt=''
              />
            </a>
            <nav className='main'>
              <Link to='/discover'>Discover</Link>
              <a href='/'>Movies</a>
              <a href='/'>TV Shows</a>
              <a href='/'>People</a>
            </nav>
          </div>
        </header>
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
        <Switch>
          <Route path='/discover'>
            <Discover />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <footer className='main'>
          <div className='container'></div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='wrapper'>
      <div className='sub-header'>
        <div className='col left'>
          <h2>
            <a href='/'>Discussions</a>
          </h2>
          <p>
            <a href='/'>Catch up now</a>
          </p>
        </div>
        <div className='col right'>
          <h2>
            <a href='/'>That's a Wrap!</a>
          </h2>
          <p>
            <a href='/'>Read the 2019 recap</a>
          </p>
        </div>
      </div>
      <main className='content'>
        <div className='container'>
          <div className='intro'>
            <div className='col'>
              <h2>On TV</h2>
              <img
                src='https://image.tmdb.org/t/p/w500_and_h282_face/yGNnjoIGOdQy3douq60tULY8teK.jpg'
                alt=''
              />
              <div className='row'>
                <img
                  src='https://image.tmdb.org/t/p/w250_and_h141_face/wXXaPMgrv96NkH8KD1TMdS2d7iq.jpg'
                  alt=''
                />
                <img
                  src='https://image.tmdb.org/t/p/w250_and_h141_face/bcyK0lXgHxLIfuCfgbEJHKzKBHm.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='col'>
              <h2>In Theaters</h2>
              <div className='row'>
                <img
                  src='https://image.tmdb.org/t/p/w250_and_h141_face/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg'
                  alt=''
                />
                <img
                  src='https://image.tmdb.org/t/p/w250_and_h141_face/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg'
                  alt=''
                />
              </div>
              <img
                src='https://image.tmdb.org/t/p/w500_and_h282_face/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

//https://api.themoviedb.org/3/movie/76341?api_key=6ba659c4bce1a142960639ba1731e656

function Discover() {
  useEffect(() => {
    console.log("123");
  }, []);
  return (
    <main className='content discover'>
      <div className='container'>
        <h2>Discover New Movies &amp; TV Shows</h2>
      </div>
    </main>
  );
}

export default App;
