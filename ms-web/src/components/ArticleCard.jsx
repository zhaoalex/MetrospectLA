import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import CategoryIcon from 'components/CategoryIcon.jsx';
import "styles/ArticleCard.css";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getArticlePreviewImage = img =>
    <img
      className="article-card-image"
      src={require(`../pages/ArticlePage/images/tacos.png`)}
      alt={this.props.title}
    />

  render() {
    return (
      <div className="article-card-wrapper">
        <Grid fluid className="article-card">
          <Link to={`/articles/${this.props.id}`}>
            <Col md={5} xs={5} className="article-card-image-container">
              {this.getArticlePreviewImage(this.props.img)}
            </Col>
            <Col md={7} xs={7} className="article-card-contents">
              {this.props.showCategory && <div className="article-card-contents-spacer" />}
              {this.props.showCategory && <CategoryIcon category={this.props.category} className="article-card-icon" />}
              <h2 style={{ margin: "5px 0" }}>{this.props.title}</h2>
              <div className="article-card-contents-summaries">
                <p>Thing</p>
                <p>Thing</p>
                <p>Thing</p>
              </div>
              <p>{this.props.desc}</p>
            </Col>
          </Link>
        </Grid>
      </div>
    )
  }
}

export default ArticleCard;

/*
        <div className="article-card-icon-container">
          {this.getCategoryImage(this.props.category)}
        </div>



                  <p>
            {this.getCategoryImage(this.props.category)}
            {this.props.desc}
          </p>
        */
