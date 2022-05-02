import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const emailRef = useRef('');
    const nameRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const supplierRef = useRef('');
    const descriptionRef = useRef('');
    const imgRef = useRef('');

    const addItem = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const description = descriptionRef.current.value;
        const supplier_name = supplierRef.current.value;
        const img = imgRef.current.value;

        const data = {email, name, price, quantity, description, supplier_name, img }
        const url = (`http://localhost:5000/myitems`);

        axios.post(url, data)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your Item Added!');
                // event.target.reset();
            }
        })
        // fetch(url, {
        //     method : 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(result => {
        //     console.log(result);
        // })
        // if(data.insertedId){
        //     toast('Your order is booked!!!');
        //     event.target.reset();
        // }

    }
    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-center my-3'>Add New Items</h2>
            <div className=''>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" value={user?.email} placeholder="Enter email" disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control ref={nameRef} type="text" placeholder="Product Title" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control ref={priceRef} type="number" placeholder="Price" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control ref={quantityRef} type="number" placeholder="Quantity"required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control ref={supplierRef} type="text" placeholder="Supplier" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control ref={descriptionRef} type="text" placeholder="Description" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control ref={imgRef} type="text" placeholder="Image url" required/>
                    </Form.Group>

                    <Button onClick={addItem} variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;