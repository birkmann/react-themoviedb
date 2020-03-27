import React from "react";
import "./index.scss";

export const Home = props => {
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
};
