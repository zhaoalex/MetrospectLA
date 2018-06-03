import React from 'react';
import { makeApiRequest } from 'apihandler.js';
import './SearchPage.css';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount = () => {
    const query = this.props.match.params.query || '';

    makeApiRequest({ url: `/search/${query}` })
      .then(data => {
        this.setState({
          results: data.results
        });
      })
  }

  render() {
    const titles = this.state.results.map(r =>
      <p>{r._source.title}</p>
    )

    return (
      <div>
        {titles}
      </div>
    )
  }
}

export default SearchPage;
