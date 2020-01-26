import React from "react";
import { useState } from "react";
import "./App.css";
import PersonModel from "./models/Person";
import Person from "./components/Person/Person";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
  // ** states ** //

  const [personState, setPersonState] = useState({
    persons: [new PersonModel(1, "Marlon", 34), new PersonModel(2, "Yenni", 27), new PersonModel(3, "Ivan", 83), new PersonModel(4, "Luisa", 70)]
  });
  const [showPersonState, setShowPersonState] = useState(true);

  const [form, setForm] = useState({
    name: { value: "Pepe" }
  });

  const setFormFieldVal = (name, event) => {
    let myForm = { ...form };
    myForm[name].value = event.currentTarget.value;
    setForm(myForm);
  };

  // ** funtions ** //

  const deletePersonHandler = (id) => {
    let persons = [...personState.persons];
    persons = persons.filter((p) => {
      if (p.id !== id) {
        return p;
      }
      return null;
    });
    setPersonState({ persons });
  };

  const changePersonNameHandler = (id, name) => {
    let persons = [...personState.persons];
    let personIndex = persons.findIndex((p) => {
      return p.id === id;
    });
    let person = { ...persons[personIndex] };
    person.name = name;
    persons[personIndex] = person;

    setPersonState({ persons });
  };

  const tooglePersonList = () => {
    setShowPersonState(!showPersonState);
  };

  // ** View variables ** //

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
              form={form}
              setFormFieldVal={setFormFieldVal.bind(this)}
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
        <Col>
          <Button onClick={tooglePersonList.bind(this)}>Toogle Person List</Button>
        </Col>
      </Row>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6">{persons}</Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default App;
