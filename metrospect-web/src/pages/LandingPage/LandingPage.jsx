import React from 'react';
import LandingNavbar from '../../components/LandingNavbar.jsx';
import CategoryButton from '../../components/CategoryButton.jsx';
import SearchBar from '../../components/SearchBar.jsx';
import "../../styles/LandingPage.css";

class LandingPage extends React.Component {
  handleButtonClick() {
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <LandingNavbar />
        <header id="header">
          <p>Logo</p>
          <h2>Hello! What do you want to do today?</h2>
          <SearchBar />
          <div id="quickselect-buttons">
            <CategoryButton img="https://medium.com/favicon.ico" text="Eat" onClick={this.handleButtonClick}/>
            <CategoryButton img="https://medium.com/favicon.ico" text="Drink" onClick={this.handleButtonClick}/>
            <CategoryButton img="https://medium.com/favicon.ico" text="Play" onClick={this.handleButtonClick}/>
            <CategoryButton img="https://medium.com/favicon.ico" text="Visit" onClick={this.handleButtonClick}/>
          </div>
        </header>
        <div id="featured">

        </div>
      </div>
    )
  }
}

export default LandingPage;
