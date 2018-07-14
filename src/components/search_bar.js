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
    this.state = { term: ''};
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
      <div>
        {/* All input elements emit a change event */}
        <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})} />
      </div>
    )
  }

}

export default SearchBar;