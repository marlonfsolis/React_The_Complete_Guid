import React from "react";
import { useState } from "react";
import "./App.css";
import PersonModel from "./models/Person";
import Person from "./components/Person/Person";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [personState, setPersonState] = useState({
    persons: [new PersonModel(1, "Marlon", 34), new PersonModel(2, "Yenni", 27), new PersonModel(3, "Ivan", 83), new PersonModel(4, "Luisa", 70)]
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

  const changePersonNameHandler = (id, event) => {
    let persons = [...personState.persons];
    let personIndex = persons.findIndex((p) => {
      return p.id === id;
    });
    let person = { ...persons[personIndex] };
    person.name = event.currentTarget.value;
    persons[personIndex] = person;

    setPersonState({persons});
  };

  let persons = null;
  if (showPersonState) {
    persons = (
      <div>
        {personState.persons.map((person) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              deletePersonHandler={deletePersonHandler.bind(this, person.id)}
              changePersonNameHandler={changePersonNameHandler.bind(this, person.id)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <Row>
        <Col sm="3"></Col>
        <Col sm="6">{persons}</Col>
        <Col sm="3"></Col>
      </Row>
      {persons}
    </div>
  );
}

export default App;
