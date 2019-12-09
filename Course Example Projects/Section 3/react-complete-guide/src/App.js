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

  switchNameHandler = () => {
    // console.log("switchNameHandler was clicked!");
    // Don't Do This: this.state.persons[0].name = 'William';
    this.setState({
      persons: [

        { name: 'William', age: 30 },

        { name: 'Joel', age: 10000000 },
  
        { name: 'John', age: 20 }
      ] 
    });
  }


  render() {

    return (

      <div className="App">

        <h1> This is from the App Component </h1>

        <p> This is really working!</p>
        
        <button onClick = {this.switchNameHandler} > Switch Name </button>
        
        
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} > My Hobbies: Watch Alabama Football </Person>
      
      </div>
    
    );
  
  }
}

export default App;
