import React, { Fragment, Component } from 'react';
import Movie from '../home/Movie';
export class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=7ac808cb0148f4d6db66b681cb9a9e54`
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
        <h4 className="genre-movie-title">
          <i class="material-icons">trending_up</i> Trending Today
        </h4>
        <div class="genre">
          <Movie results={this.state.results} />
        </div>
      </Fragment>
    );
  }
}

export default Trending;
