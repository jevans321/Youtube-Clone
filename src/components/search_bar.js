import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render () {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
  /* WHAT'S HAPPENING
     When a search term is entered into the <input /> field
     - the 'onChange' event handler is triggered
     - the entered term value is retrieved from the event.target property
     - this value is passed to the 'onInputChage' function below
     - the 'term' inside 'state' is updated with the value
     - then the 'term' value is passed to the onSearchTermChange function
     - this function will trigger the youTubeSearch function to fetch new videos
     - the videos will be updated based on the term
     - so the video list will update and the iframe video will update
  */
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;