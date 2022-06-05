import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price:${price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Book {name}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;