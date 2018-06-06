import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import CategoryButton from 'components/CategoryButton.jsx';
import SearchBar from 'components/SearchBar.jsx';
import ArticleCard from 'components/ArticleCard.jsx';
import { LogoSkyline } from 'components/public';
import { makeApiRequest } from 'apihandler.js';
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: null,
      results: []
    };

    makeApiRequest('/api/search/')
      .then(data => {
        this.setState({
          results: data.results.slice(0, 4)
        })
      })
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

    const articles = this.state.results && this.state.results.map(r =>
      <ArticleCard
        key={r._id}
        id={r._id}
        title={r._source.title}
        desc={r._source.short_description}
        category={r._source.category}
        img={r._source.thumbnail}
        summary={r._source.summary}
        showCategory={!this.props.category}
      />
    )

    return (
      <div style={{ height: "100vh" }}>
        <div className="header-logo">
          <LogoSkyline height={250} width={750}/>
        </div>
        <header id="header">
          <h1>Making sure everyone gets around.</h1>
          <SearchBar className="header-searchbar" submit={this.redirectSearch} />
          <div id="quickselect-buttons">
            <CategoryButton category="Eat" />
            <CategoryButton category="Drink" />
            <CategoryButton category="Play" />
            <CategoryButton category="Visit" />
          </div>
        </header>
        <div id="featured">
          <div className="featured-contents">
            <h1 id="featured_header">FEATURED</h1>
            <div className="featured-contents-cards">
              {articles}
            </div>
            <Link to="/search/" className="featured-show-more">View more</Link>
          </div>

        </div>
        <div id="about-us">
          <div className="about-us-text">
            <h1 id="about_header">ABOUT US</h1>
            <p id="about_us_description">Metrospect started as a Creative Labs project in spring of 2018. Our team is a passionate group of developers, designers, and content creators who love all that is LA. Let's explore the cultural richness of LA together. Let's go on an adventure.</p>
          </div>
          <div className="about-us-pics">
            <img id="team_pic" src={require('./Images/team.jpg')} alt="We the squad." />
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
