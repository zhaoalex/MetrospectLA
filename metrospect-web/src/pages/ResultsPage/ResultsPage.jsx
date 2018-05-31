import React from 'react';
import ArticleCard from '../../components/ArticleCard.jsx';

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ArticleCard
          title="Tacos at Grand Central"
          desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
          category="eat"
          img="src/pages/ArticlePage/images/tacos.png"
        />
      </div>
    )
  }
}

export default ResultsPage;
