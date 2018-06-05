import React from 'react';
import * as Icons from 'components/icons'
import "styles/CategoryIcon.css";

function CategoryIcon(props) {
  const category = props.category ? props.category : 'other';
  // const IconTag = React.Component(Icons.${category.charAt(0).toUpperCase()}${category.slice(1)}Icon`);

  const IconTag = {
    eat: Icons.EatIcon,
    drink: Icons.DrinkIcon,
    play: Icons.PlayIcon,
    visit: Icons.VisitIcon
  }[props.category.toLowerCase()];

  return <IconTag
    className={[props.className, "category-icon", `category-icon-${category.toLowerCase()}`].join(' ')}
    fill={props.fill}
    transparent={props.transparent}
    size={props.size} />
}

export default CategoryIcon;
