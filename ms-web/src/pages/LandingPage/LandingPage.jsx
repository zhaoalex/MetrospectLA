import React from 'react';
import { Redirect } from 'react-router-dom';
import CategoryButton from 'components/CategoryButton.jsx';
import SearchBar from 'components/SearchBar.jsx';
import ArticleCard from 'components/ArticleCard.jsx';
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false
    };
  }

  handleButtonClick() {
    console.log("clicked");
  }

  redirectSearch = e => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <header id="header">
          <p>Logo</p>
          <h1>Hello! What do you want to do today?</h1>
          <SearchBar handleSubmit={this.redirectSearch} />
          <div id="quickselect-buttons">
            <CategoryButton category="Eat" onClick={this.handleButtonClick}/>
            <CategoryButton category="Drink" onClick={this.handleButtonClick}/>
            <CategoryButton category="Play" onClick={this.handleButtonClick}/>
            <CategoryButton category="Visit" onClick={this.handleButtonClick}/>
          </div>
        </header>
        <div id="featured">
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
            showCategory
          />
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
            showCategory
          />
        </div>
        {this.state.fireRedirect && <Redirect to={`/search/${this.state.searchInput}`} />}
      </div>
    )
  }
}

export default LandingPage;
