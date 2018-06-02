import React from 'react';
import CategoryButton from 'components/CategoryButton.jsx';
import SearchBar from 'components/SearchBar.jsx';
import ArticleCard from 'components/ArticleCard.jsx';
import "./LandingPage.css";

class LandingPage extends React.Component {
  handleButtonClick() {
    console.log("clicked");
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <header id="header">
          <p>Logo</p>
          <h2>Hello! What do you want to do today?</h2>
          <SearchBar />
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
          />
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
          />
        </div>
      </div>
    )
  }
}

export default LandingPage;

/*
        <div id="featured">
          <ArticleCard
            title="Tacos at Grand Central"
            desc="Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams."
            category="eat"
            img="src/pages/ArticlePage/images/tacos.png"
          />
          <ArticleCard
            title="TITLE NUMBER TWO"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nibh libero. Nunc luctus nibh faucibus fermentum tempus. Phasellus posuere."
            category="play"
            img="categories/play.jpg"
          />
        </div>
*/
