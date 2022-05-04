import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ManageInventories.css'

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://infinite-peak-24257.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://infinite-peak-24257.herokuapp.com/product/${id}`;
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

    const navigateToAddItem = () =>{
        navigate ('/additem');
    }

    return (
        <div className='container inventories-container'>
            <div className='d-flex align-items-center justify-content-center'>
            <h2 className='text-center my-4'>Manage Inventories</h2>
            <button onClick={navigateToAddItem} className='btn btn-primary ms-2'>Add new item</button>
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
                    </div>)
            }
        </div>
    );
};

export default ManageInventories;