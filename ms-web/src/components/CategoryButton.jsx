import React from 'react';
import CategoryIcon from './CategoryIcon.jsx';
import "../styles/CategoryButton.css";

function CategoryButton(props) {
  return (
    <button className="category-button" onClick={props.onClick}>
      <CategoryIcon category={props.category} className="category-button-img" />
      <br />
      {props.category}
    </button>
  )
}

export default CategoryButton;
