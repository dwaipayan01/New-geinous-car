import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const handleServiceDetail = id => {
        navigate(`/service/${id}`)
    }
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
                    <Button onClick={() => handleServiceDetail(id)} variant="primary">Book {name}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;