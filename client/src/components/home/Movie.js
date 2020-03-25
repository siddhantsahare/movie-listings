import React, { Fragment } from 'react';

const Movie = ({ results }) => {
  const imagePath = 'http://image.tmdb.org/t/p/w185';

  return (
    <Fragment>
      {results.map(result => (
        <div class=" genre-card card hoverable">
          <div class="genre-image card-image waves-effect waves-block waves-light">
            <img class="activator" src={`${imagePath}${result.poster_path}`} />
          </div>
          <div class="card-content genre-card-content">
            <span class="card-title activator grey-text text-darken-4">
              <div class="inner-content">
                <i class="small material-icons right">keyboard_arrow_up</i>
              </div>
              <div className="genre-title">{result.title}</div>
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              <i class="material-icons right">close</i>
              <i class="tiny material-icons">star</i>
              <span className="genre-star">{result.vote_average}</span>
              <p className="genre-title">{result.title}</p>
            </span>
            <p>{result.overview}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Movie;
