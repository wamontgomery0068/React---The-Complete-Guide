import React, { Component } from "react";

import Person from './Person/Person';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> This is from the App Component </h1>
        <Person name = "Andrew" age = "30" />
        <Person name = "Joel" age = "32" />
        <Person name = "John" age = "24"> My Hobbies: Watch Alabama Football </Person>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
