import React from 'react';
import { makeApiRequest } from 'apihandler.js';
import ArticleCard from 'components/ArticleCard.jsx';
import './SearchPage.css';
import 'pages/ResultsPage/ResultsPage.css';

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
      <ArticleCard
        title={r._source.title}
        desc={r._source.short_description}
        category={r._source.category}
        img={r._source.image1}
      />
    )

    return (
      <div className="results-contents-articles">
        {titles}
      </div>
    )
  }
}

export default SearchPage;
