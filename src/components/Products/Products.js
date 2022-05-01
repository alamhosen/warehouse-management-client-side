import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then (data => setProducts(data))
    }, []);

    const manageInventories = () =>{
        navigate('manageinventories');
    }
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Inventory Items</h2>
            <div className='products-container mb-3'>
                {
                    products.slice(0, 6).map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
            <button onClick={manageInventories} className='btn btn-primary d-flex mx-auto my-5'>Manage Inventories</button>
        </div>
    );
};

export default Products;