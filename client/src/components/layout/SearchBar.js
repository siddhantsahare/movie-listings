import React, { Fragment, Component } from 'react';
import SearchResult from './SearchResult';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      results: []
    };
  }
  onTextChange = e => {
    let val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      console.log(val);
      if (val == '') {
        this.setState({ ...this.state, results: [] });
      } else {
        setTimeout(() => {
          fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=7ac808cb0148f4d6db66b681cb9a9e54&language=en-US&query=${val}&page=1&include_adult=false`
          )
            .then(res => res.json())
            .then(data => {
              this.setState({ results: data.results });
            })
            .catch(console.log);
          //clear out the search results after clearing input
          if (this.state.results.length == 0) {
            this.setState({ ...this.state, results: [] });
          }
        }, 2000);
      }
    });
  };
  render() {
    return (
      <Fragment>
        <nav className="grey darken-2">
          <div class="nav-wrapper container">
            <form>
              <div class="input-field">
                <input
                  id="search"
                  type="search"
                  onChange={this.onTextChange}
                  placeholder="Search for Movies, TV Shows, Personalities, etc"
                  required
                />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>

        <div class="genre">
          <SearchResult results={this.state.results} />
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
