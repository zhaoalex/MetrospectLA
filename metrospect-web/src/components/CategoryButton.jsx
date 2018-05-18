import React from 'react';
import "../styles/CategoryButton.css";

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="category-button" onClick={this.props.onClick}>
        <img src={this.props.img} alt={this.props.text} />
        <br />
        {this.props.text}
      </button>
    )
  }
}

export default CategoryButton;
