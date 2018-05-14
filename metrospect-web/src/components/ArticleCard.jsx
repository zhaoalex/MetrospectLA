import React from 'react';
import "../styles/ArticleCard.css";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getCategoryImage(type) {
    return ""
  }

  render() {
    return (
      <div class="article-card">
        <div class="article-card-image">

        </div>
        <div class="article-card-summary">
          <h3>{this.props.title}</h3>
          <p>{this.props.summary}</p>
          <img src={getCategoryImage(this.props.category)} class="article-card-category-img" alt={this.props.category} />
        </div>
      </div>
    )
  }
}

export default ArticleCard;
