import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {

    const { id, name, price, quantity, description, img, supplier_name } = product;

    return (
        <div className='product-container d-flex mx-auto'>
            <CardGroup>
                <Card>
                    <div><Card.Img variant="top" src={img} /></div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Price: ${price}</Card.Title>
                        <Card.Title>Quantity: {quantity}</Card.Title>
                        <Card.Text> Supplier: <strong>{supplier_name}</strong></Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                        <button className='btn btn-primary'>Stock Update</button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Product;