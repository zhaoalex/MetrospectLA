import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIcon from './CategoryIcon.jsx';
import "../styles/CategoryButton.css";

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
  }

  redirect = category => {
    this.props.history.push(`/${category}`);
  }

  render() {
    const { category } = this.props;

    return (
      <div className="category-button">
        <Link to={`/${category.toLowerCase()}`}>
          <CategoryIcon category={category} className="category-button-img" />
          <br />
          {category}
        </Link>
      </div>
    )
  }
}

export default CategoryButton;
