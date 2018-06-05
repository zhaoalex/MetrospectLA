import React from 'react';
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import 'styles/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchInput: ""
    }
  }

  handleChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.searchInput);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.searchInput}
                placeholder="Search"
                onChange={this.handleChange}
                id="search_form"
              />
              <InputGroup.Button>
                <Button id="search_button" type="submit">
                  <Glyphicon id="search_glyph" glyph="search" />
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default SearchBar;
