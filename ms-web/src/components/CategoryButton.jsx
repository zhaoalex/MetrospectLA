import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryIcon from 'components/CategoryIcon.jsx';
import "styles/CategoryButton.css";

function CategoryButton(props) {
  const { category } = props;

  return (
    <div className="category-button">
      <NavLink to={`/${category.toLowerCase()}`}>
        <CategoryIcon category={category} className="category-button-img" />
        <br />
        {category}
      </NavLink>
    </div>
  )
}

export default CategoryButton;
