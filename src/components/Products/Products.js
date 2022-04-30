import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))
    }, []);
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Inventory Items</h2>
            <div className='products-container mb-3'>
                {
                    products.slice(0, 6).map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;