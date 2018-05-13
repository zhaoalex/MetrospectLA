import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={LandingPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
