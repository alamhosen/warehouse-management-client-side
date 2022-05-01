import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center'>
            <h2 className='text-center my-4'>Manage Inventories</h2>
            <button className='btn btn-primary ms-2'>Add new item</button>
            </div>
            
            {
                products.map(product =>

                    <div key={product._id} >

                        <ListGroup >
                            <ListGroup.Item className='container manage-product d-flex align-items-center my-3 mx-auto justify-content-between'>
                            <img src={product.img} alt="" />
                                    <p><strong>{product.name}</strong></p>
                                    <p><strong>Price: </strong>{product.price}</p>
                                    <p><strong>Quantity: </strong>{product.quantity}</p>
                                    <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete Item</button>                  
                            </ListGroup.Item>
                        </ListGroup>
                        <Container>
                            <Row>
                                <Col>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>)
            }
        </div>
    );
};

export default ManageInventories;