import React, { Fragment, Component } from 'react';
import Movie from '../Movie';
export class Drama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excludedGenres:
        '12,16,28,80,35,99,10749,14,36,27,10402,9648,878,10770,53,10752,37',
      results: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7ac808cb0148f4d6db66b681cb9a9e54&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=18&without_genres=${this.state.excludedGenres}&include_video=false&page=1`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data.results });
      })
      .catch(console.log);
  }
  render() {
    return (
      <Fragment>
        <h4 className="genre-movie-title">Drama Movies</h4>
        <div class="genre">
          <Movie results={this.state.results} />
        </div>
      </Fragment>
    );
  }
}

export default Drama;
