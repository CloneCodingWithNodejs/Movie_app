import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends React.Component {
  render() {
    // eslint-disable-next-line object-curly-newline
    const { poster, title, summary, year, genres } = this.props;

    return (
      <div className="movies__movie">
        <div className="poster__div">
          <img className="movie__poster" src={poster} alt={title} />
        </div>
        <div className="movie__data">
          <span className="movie__title">{title}</span>
          <h4 className="movie__year">{year}</h4>
          <ul className="movie__genres">
            {genres.map((genre) => (
              <li key={genre} className="genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;
