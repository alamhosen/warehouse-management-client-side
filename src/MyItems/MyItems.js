import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [myItems, setMyItems] = useState([]);

    useEffect ( () =>{
        const getItems = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data)
            }
            catch(error){
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/myitems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(product => product._id !== id);
                    setMyItems(remaining);
                })
        }
    }
    return (
        <div className='container inventories-container'>
            <div className='d-flex align-items-center justify-content-center'>
            <h2 className='text-center my-4'>Manage Inventories</h2>
            </div>
            
            {
                myItems.map(myItem =>

                    <div key={myItem._id} >

                        <ListGroup >
                            <ListGroup.Item className='container manage-product d-flex align-items-center my-3 mx-auto justify-content-between'>
                            <img src={myItem.img} alt="" />
                                    <p><strong>{myItem.name}</strong></p>
                                    <p><strong>Price: </strong>{myItem.price}</p>
                                    <p><strong>Quantity: </strong>{myItem.quantity}</p>
                                    <button onClick={() => handleDelete(myItem._id)} className='btn btn-danger'>Delete Item</button>                  
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

export default MyItems;