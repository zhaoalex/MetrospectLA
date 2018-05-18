import React from 'react';
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchInput: ""
    }
  }

  handleChange(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  render() {
    return (
      <form>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.searchInput}
              placeholder="Search"
              onChange={this.handleChange}
            />
            <InputGroup.Button>
              <Button>
                <Glyphicon glyph="search" />
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    )
  }
}

export default SearchBar;
