import React from 'react';
import './ManageInventory.css'

const ManageInventory = ({product}) => {
    const { _id, name, price, quantity, description, img, supplier_name } = product;

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url)
            .then(res => res.json())
            .then (data => {
                const remaining = product.filter(product => product._id !== id)
                product(remaining)
            })
        }
    }

    return (
        <div className='container manage-product d-flex align-items-center my-3 mx-auto'>
            <img src={img} alt="" />
            <p className='mx-2'><strong>{name}</strong></p>
            <p><strong>Price:</strong> ${price}</p>
            <p className='mx-2'><strong>Quantity: </strong>{quantity}</p>
            <button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete Item</button>
        </div>
    );
};

export default ManageInventory;