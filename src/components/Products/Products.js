import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        fetch('https://infinite-peak-24257.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false);
    }, []);

    if (isLoading === true) {
        return <Loading></Loading>
    }

    const manageInventories = () => {
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