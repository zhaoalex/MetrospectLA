import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Image } from 'react-bootstrap';
import CategoryIcon from 'components/CategoryIcon.jsx';
import "styles/ArticleCard.css";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getArticlePreviewImage = img =>
    <Image className="article-card-image" src={img} alt={this.props.title} responsive />

    /* {<img
      className="article-card-image"
      src={this.props.img}
      alt={this.props.title}
    />} */

  render() {
    const { id, title, desc, category, img, showCategory } = this.props;

    return (
      <div className="article-card-wrapper">
        <Grid fluid className="article-card">
          <Link to={`/article/${id}`}>
            <Col md={5} xs={5} className="article-card-image-container">
              {this.getArticlePreviewImage(img)}
            </Col>
            <Col md={7} xs={7} className="article-card-contents">
              {showCategory && <div className="article-card-contents-spacer" />}
              {showCategory && <CategoryIcon fill category={category} className="article-card-icon" />}
              <h2 className={["article-card-contents-title", category].join(' ')}>{title}</h2>
              <div className="article-card-contents-summaries">
                <p>Thing</p>
                <p>Thing</p>
                <p>Thing</p>
              </div>
              <p>{desc}</p>
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
