import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingNavbar from "./components/LandingNavbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import ArticlePage from "./pages/ArticlePage/ArticlePage.jsx";
import ResultsPage from "./pages/ResultsPage/ResultsPage.jsx";
// import TestingApp from "./pages/Test/ride_pricing.jsx"

class App extends React.Component {
  componentDidMount() {
    fetch("/api/test")
      .then(res => res.json())
      .then(data => {console.log(data)})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <LandingNavbar />
          <Switch>
            <Route path="/articles" component={ArticlePage} />
            <Route exact path="/" component={LandingPage} />
            {/* <Route path="/uber" component={TestingApp} /> */}
            <Route path="/eat" render={() => <ResultsPage category="eat" />} />
            <Route path="/drink" render={() => <ResultsPage category="drink" />} />
            <Route path="/play" render={() => <ResultsPage category="play" />} />
            <Route path="/visit" render={() => <ResultsPage category="visit" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
