import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryIcon from 'components/CategoryIcon.jsx';
import "styles/CategoryButton.css";
import { timingSafeEqual } from 'crypto';

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      hovering: false
    };
  }

  onMouseEnter = () => {
    this.setState({
      hovering: true
    });
  }

  onMouseLeave = () => {
    this.setState({
      hovering: false
    });
  }

  render() {
    const { category } = this.props;

    return (
      <div className="category-button" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <NavLink to={`/${category.toLowerCase()}`} activeClassName="category-button-active">
          <CategoryIcon
            category={category}
            className={`category-button-img category-button-${category.toLowerCase()}`}
            size={75}
            fill={this.state.hovering}
          />
          <br />
          <p>{category.toUpperCase()}</p>
        </NavLink>
      </div>
    )
  }
}

export default CategoryButton;
