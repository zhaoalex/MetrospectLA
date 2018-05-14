import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ArticlePage from "./ArticlePage"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/articles" component={ArticlePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
