import React from 'react';
import ArticleCard from 'components/ArticleCard.jsx';
import CategoryIcon from 'components/CategoryIcon.jsx';
import SearchBar from 'components/SearchBar.jsx';
import { makeApiRequest } from 'apihandler.js';
import "./ResultsPage.css";

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }

    // TODO: handle categories
    const query = (this.props.match && this.props.match.params && this.props.match.params.query) || 'quiet';
    makeApiRequest(`/api/search/${query}`)
      .then(data => {
        this.setState({
          results: data.results
        });
      })
  }

  updateOnSearch = query => {
    // TODO: will probably act more as a filter?
  }

  render() {
    const articles = this.state.results && this.state.results.map(r =>
      <ArticleCard
        key={r._id}
        id={r._id}
        title={r._source.title}
        desc={r._source.short_description}
        category={r._source.category}
        img={r._source.image1}
        showCategory={!this.props.category}
      />
    )

    return (
      <div>
        <div className="results-header">
          <div className="results-header-contents">
            {this.props.category &&
                <CategoryIcon category={this.props.category} className="results-header-icon" />
            }
            <SearchBar submit={this.updateOnSearch} />
            <p>Price</p>
            <p>Distance</p>
            <p>Time</p>
          </div>
        </div>
        <div className="results-contents">
          {(articles && articles.length !== 0) || <h2>Sorry, no results!</h2>}
        </div>
      </div>
    )
  }
}

export default ResultsPage;
