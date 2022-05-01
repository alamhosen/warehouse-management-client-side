import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then (data => setProducts(data))
    }, []);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url)
            .then(res => res.json())
            .then (data => {
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
            })
        }
    }

    return (
        <div className='container'>
            <h2 className='text-center my-4'>Manage Inventories</h2>
            {
                products.map(product => 
                <div key={product._id} className='container manage-product d-flex align-items-center my-3 mx-auto'>
                    <img src={product.img} alt="" />
                    <p className='mx-2'><strong>{product.name}</strong></p>
                    <p><strong>Price: </strong>{product.price}</p>
                    <p className='mx-2'><strong>Quantity: </strong>{product.quantity}</p>
                    <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete Item</button>
                </div>)
            }
        </div>
    );
};

export default ManageInventories;