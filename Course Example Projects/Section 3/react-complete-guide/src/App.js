import React, { useState } from "react";

import Person from "./Person/Person";

import "./App.css";

const App = props => {

  const [personState, setPersons] = useState({

    persons: [
      { name: "Andrew", age: 30 },

      { name: "Joel", age: 35 },

      { name: "John", age: 24 }
    ],
  });

  const [otherState, setOtherState] = useState('Something Else!');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersons({
      persons: [
        { name: "William", age: 30 },

        { name: "Joel", age: 10000000 },

        { name: "John", age: 20 }
      ]
    });
  };

  return (
    <div className="App">
      <h1> This is from the App Component </h1>

      <p> This is really working!</p>

      <button onClick={switchNameHandler}> Switch Name </button>

      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />

      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />

      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      >
        {" "}
        My Hobbies: Watch Alabama Football{" "}
      </Person>
    </div>
  );
};

export default App;
