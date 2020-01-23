/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieArray: []
    };
  }

  componentDidMount = async () => {
    const movieJSON = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );

    const {
      data: {
        data: { movies }
      }
    } = movieJSON;

    this.setState({ movieArray: movies, isLoading: false });

    console.log(this.state.movieArray);
  };

  // state는 직접 변경하면
  render() {
    const {
      state: { isLoading, movieArray }
    } = this;

    return (
      <section className="container">
        {isLoading ? (
          'Loading...'
        ) : (
          <div className="movies">
            {movieArray.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
