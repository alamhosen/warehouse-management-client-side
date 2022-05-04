import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, price, quantity, description, img, supplier_name } = product;
    
    const newQuantity = quantity;

    useEffect(() => {
        fetch(`https://infinite-peak-24257.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);


    const handleDelivered = (event) => {
        // event.preventDefault();
        const quantity = parseInt(newQuantity) - 1;
        const updateQuantity = { quantity }
        const url = `https://infinite-peak-24257.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                alert('Quantity updated successfully!')
            })

    }

    const handleRestock = (event) => {
        // event.preventDefault();
        const quantity = parseInt(newQuantity) + parseInt(event.target.quantity.value);
        const updateQuantity = { quantity }
        const url = `https://infinite-peak-24257.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                alert('Quantity updated successfully!')
            })

    }

    return (
        <div className='inventory-container d-flex mx-auto mt-5'>
            <CardGroup >
                <Card className='border-0'>
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
                    <form className='mb-3' onSubmit={handleDelivered}>
                        <input className='btn btn-primary ' type="submit" value="Delivered" />
                    </form>

                    <Form onSubmit={handleRestock} className='d-flex justify-content-center'>
                        <input className='' type="number" name="quantity" id="" placeholder='Restock the items' /> 
                        <input className='btn btn-primary mt-0 mx-2' type="submit" value="Restock" />
                    </Form>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Inventory;