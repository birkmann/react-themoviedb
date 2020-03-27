import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Header = props => {
  return (
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
  );
};
