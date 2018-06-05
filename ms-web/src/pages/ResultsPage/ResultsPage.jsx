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
      results: [],
      query: ''
    }

    const query = (this.props.match && this.props.match.params && this.props.match.params.query) || this.props.category || '';

    makeApiRequest(`/api/search/${query === this.props.category ? `category/${this.props.category}` : query}`)
      .then(data => {
        this.setState({
          results: data.results,
          query
        });
      })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const query = (this.props.match && this.props.match.params && this.props.match.params.query) || this.props.category || '';
    if (query === prevState.query) return;

    makeApiRequest(`/api/search/${query === this.props.category ? `category/${this.props.category}` : query}`)
      .then(data => {
        this.setState({
          results: data.results,
          query
        });
      })
  }

  updateOnSearch = query => {

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
        price={r._source.summary.price}
        time={r._source.summary.time}
        distance={r._source.summary.distance}
        showCategory={!this.props.category}
      />
    )

    return (
      <div>
        <div className="results-header">
          <div className="results-header-contents">
            {this.props.category &&
                <CategoryIcon fill size={100} category={this.props.category} className="results-header-icon" />
            }
            <SearchBar className="searchbar" submit={this.updateOnSearch} />
          {//   <p>Price</p>
          //   <p>Distance</p>
          //   <p>Time</p>
          }
          </div>
        </div>
        <div className="results-contents">
          {(articles.length !== 0 && articles) || <h2>Getting results...</h2>}
        </div>
      </div>
    )
  }
}

export default ResultsPage;
