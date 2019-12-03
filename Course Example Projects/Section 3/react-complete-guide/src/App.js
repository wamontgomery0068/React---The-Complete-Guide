import React, { Component } from "react";

import Person from './Person/Person';

import "./App.css";

class App extends Component {

  state = {

    persons: [

      { name: 'Andrew', age: 30 },

      { name: 'Joel', age: 35 },

      { name: 'John', age: 24 }

    ]

  }

  // We can define a special property named state.
  // State is managed from inside a component.
  // Important, this state property here is only available like this in components that extend components.
  // So in class-based React components.
  // We initialize it by assigning a value and this value is a JavaScript object.

  render() {

    return (

      <div className="App">

        <h1> This is from the App Component </h1>

        <p> This is really working!</p>
        
        <button> Switch Name </button>
        {/* Add a button which if we click it, simply switchesone of the names we use here. */}
        
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} > My Hobbies: Watch Alabama Football </Person>
      
      </div>
    
    );
  
  }
}

export default App;
