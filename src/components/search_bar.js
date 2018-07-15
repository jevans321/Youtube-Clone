import React, { Component } from 'react';

/* Start with a Functional Component and only when you decide
   that you need added functionality should you start to refactor
   it to a Class-based Component */

/* Class-Based Component
  - whenever you want to have some kind of internal record keeping
  - Some ability for it to be aware of itself and what's happened to it since
    it's been rendered
  - creating using an ES6 Class
  Function components
  - a function you call and it simply returns plain jsx
  - do not have state, only class-based components do */

/* class "SearchBar"
    - is an object that can create instances, a class..
   "Extend" the class
    - give SearchBar class all the functionality that React.Component has
   render()
    - Every class-based component must have a render methond
*/

/* EVENTS
    - handling events in React has 2 steps
      1. Declare Event handler
         - the event handler is a function that should be ran whenever the event occurs
      2. We pass the Event handler to the element we want to monitor for events */
class SearchBar extends Component {
  // Constructor is called automatically whenever a class is created
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  /* To get access to the Change input use
  react defined special property 'onChange' property 
  The function inside the brackets of 'onChange' is
  the 'event handler'*/

  /* Below is syntax used for defining methods on a class
     - this is unlike normal methods being defined in objects.
     - render does not have a colin after it like a 'render: function()' prop */
  render () {
    return (
      <div className="search-bar">
        {/* All input elements emit a change event */}
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