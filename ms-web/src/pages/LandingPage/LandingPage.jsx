import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import CategoryButton from 'components/CategoryButton.jsx';
import SearchBar from 'components/SearchBar.jsx';
import ArticleCard from 'components/ArticleCard.jsx';
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: null
    };
  }

  redirectSearch = query => {
    this.setState({
      searchQuery: query
    });
  }

  render() {
    if (this.state.searchQuery) {
      return <Redirect to={`/search/${this.state.searchQuery}`} />
    }

    return (
      <div style={{ height: "100vh" }}>
        <header id="header">
          <p>Logo</p>
          <h1>Hello! What do you want to do today?</h1>
          <SearchBar submit={this.redirectSearch} />
          <div id="quickselect-buttons">
            <CategoryButton category="Eat" />
            <CategoryButton category="Drink" />
            <CategoryButton category="Play" />
            <CategoryButton category="Visit" />
          </div>
        </header>
        <div id="featured">
          <div className="featured-contents">
            <h1>FEATURED</h1>
            <div className="featured-contents-cards">
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
            <Link to="/search/" className="featured-show-more">Show more</Link>
          </div>

        </div>
        <div id="about-us">
          <div className="about-us-text">
            <h1 style={{ color: "#FF6745" }}>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim velit, aliquam ac posuere ac, pulvinar quis elit. Nam viverra dolor vitae nibh imperdiet venenatis. Etiam at posuere nisi. Sed condimentum nulla at rutrum faucibus. Pellentesque id nibh dui.</p>
          </div>
          <div className="about-us-pics">
            <p>Pic</p>
          </div>
        </div>
        <div id="footer">
          <div className="footer-contents">
            <h4>Made with <span role="img" aria-label="heart">❤️</span> from the Metrospect team.</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
