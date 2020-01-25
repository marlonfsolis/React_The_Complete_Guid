import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonModel from './models/Person';
import Person from './components/Person/Person';

function App() {

  const [personState, setPersonState] = useState({
    persons: [
      new PersonModel(1, 'Marlon', 34),
      new PersonModel(2, 'Yenni', 27),
      new PersonModel(3, 'Ivan', 83),
      new PersonModel(4, 'Luisa', 70)
    ]
  });
  const [showPersonState, setShowPersonState] = useState(true);

  const deletePersonHandler = (id, event) => {
    let persons = [...personState.persons];
    persons = persons.filter((p) => {
      if (p.id !== id) {
        return p;
      }
      return null;
    });
    setPersonState({ persons });
  };

  let persons = null;
  if (showPersonState) {
    persons = (
      <div>
        {
          personState.persons.map(person => {
            return (
              <Person key={person.id} name={person.name} age={person.age} deletePersonHandler={deletePersonHandler.bind(this, person.id)} />
            );
          })
        }
      </div>
    );
  }

  return (
    <div className="App">
      {persons}
    </div>
  );
}

export default App;
