import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Person(props) {
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        I am {props.age} years old.
                    </Card.Text>
                    <Button variant="danger" onClick={props.deletePersonHandler}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
