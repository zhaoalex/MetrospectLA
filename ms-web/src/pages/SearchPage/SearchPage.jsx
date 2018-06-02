import React from 'react';
import { makeApiRequest } from 'apihandler.js';
import './SearchPage.css';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    const query = props.match.params.query || '';
    this.state = {
      results: []
    }
    makeApiRequest({ url: `/search/${query}` })
      .then(data => {
        this.state = {
          results: data
        };
      })
  }

  render() {
    return (
      <p>{this.state.results.join()}</p>
    )
  }
}

export default SearchPage;
