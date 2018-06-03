import React from 'react';
import ArticleCard from 'components/ArticleCard.jsx';
import CategoryIcon from 'components/CategoryIcon.jsx';
import SearchBar from 'components/SearchBar.jsx';
import "./ResultsPage.css";

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="results-header">
          <div className="results-header-contents">
            <CategoryIcon category={this.props.category} className="results-header-contents-icon" />
            <SearchBar />
            <p>Price</p>
            <p>Distance</p>
            <p>Time</p>
          </div>
        </div>
        <div className="results-contents">
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams. blah blah blah blah blah blah blah blah"
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
          />
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
          />
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
          />
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
          />
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
          />
        </div>
      </div>
    )
  }
}

export default ResultsPage;
