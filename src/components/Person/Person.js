import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

export default function Person(props) {

  const [form, setForm] = useState({
    name: { value: props.name }
  });

  const setFormFieldVal = (name, event) => {
    let myForm = { ...form };
    myForm[name].value = event.currentTarget.value;
    setForm(myForm);
  };

  const setPersonData = () => {
    props.changePersonNameHandler(form);
  };

  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <p>I am {props.age} years old.</p>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="3">
                New Name
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" value={form['name'].value} onChange={setFormFieldVal.bind(this, 'name')}></Form.Control>
              </Col>
            </Form.Group>
          </Form>
          <Button className="mr-2" variant="danger" onClick={props.deletePersonHandler}>
            Delete
          </Button>
          <Button variant="success" onClick={setPersonData}>
            Change Name
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
