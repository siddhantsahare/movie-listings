import React, { Fragment, Component } from 'react';
import Movie from '../home/Movie';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div class="genre">
          <Movie results={this.props.results} />
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
