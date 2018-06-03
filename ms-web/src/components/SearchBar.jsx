import React from 'react';
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import 'styles/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchInput: "",
      fireRedirect: false
    }
  }

  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  }

  submitForm = e => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.submitForm}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.searchInput}
                placeholder="Search"
                onChange={this.handleChange}
              />
              <InputGroup.Button>
                <Button type="submit">
                  <Glyphicon glyph="search" />
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
        {this.state.fireRedirect && <Redirect to={`/search/${this.state.searchInput}`} />}
      </div>
    )
  }
}

export default SearchBar;
