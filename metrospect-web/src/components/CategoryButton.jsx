import React from 'react';
import "../styles/CategoryButton.css";

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
  }

  getImage = category => <img src={require(`../categories/${category.toLowerCase()}.jpg`)} alt={category} />

  render() {
    return (
      <button className="category-button" onClick={this.props.onClick}>
        {this.getImage(this.props.category)}
        <br />
        {this.props.category}
      </button>
    )
  }
}

export default CategoryButton;
