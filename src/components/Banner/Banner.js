import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner-1.jpg'
import banner2 from '../../images/banner/banner-2.jpg'
import banner3 from '../../images/banner/banner-3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="golden grocery"
                    />
                    <Carousel.Caption>
                        <h3>Convenient Product Comparison</h3>
                        <p>Shoppers can seamlessly view and compare products they want to buy and make informed purchasing decisions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="golden grocery"
                    />

                    <Carousel.Caption>
                        <h3>Smooth Order Management</h3>
                        <p>Store owners can check order delivery status and customer detail and can. Customers can also track their order status.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="golden grocery"
                    />

                    <Carousel.Caption>
                        <h3>Advanced Product Search</h3>
                        <p>Customers can easily search for any product they're looking for .</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;