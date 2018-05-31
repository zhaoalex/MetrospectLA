import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingNavbar from "./components/LandingNavbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import ArticlePage from "./pages/ArticlePage/ArticlePage.jsx";
import ResultsPage from "./pages/ResultsPage/ResultsPage.jsx";
import TestingApp from "./pages/Test/ride_pricing.jsx"

class App extends React.Component {
  initResultsRouting() {

  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <LandingNavbar />
          <Switch>
            <Route path="/articles" component={ArticlePage} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/uber" component={TestingApp} />
            {<Route exact path="/eat" render={() => <ResultsPage type="eat" />} />}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
