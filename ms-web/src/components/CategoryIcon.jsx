import React from 'react';
import "../styles/CategoryIcon.css";

function CategoryIcon(props) {
  const category = props.category ? props.category : 'other';
  return <img className={[props.className, "category-icon"].join(' ')} src={require(`../../public/categories/${category.toLowerCase()}.jpg`)} alt={category} />
}

export default CategoryIcon;
