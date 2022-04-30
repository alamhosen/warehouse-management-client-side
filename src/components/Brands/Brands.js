import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Brands.css'

const Brands = () => {
    return (
        <div className='brands-container container'>
            <h2 className='text-center'>Shop by Brands</h2>
            <div className='text-center'>
                <Container>
                    <Row>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/JHMyz8g/Quaker.png" alt="" /></Col>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/WPWL18f/IZZE.jpg" alt="" /></Col>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/RjFyx06/quest.jpg" alt="" /></Col>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/bXy9pvC/Vita-Coco.jpg" alt="" /></Col>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/r3nC8Nj/clorox.jpg" alt="" /></Col>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/R4xLtPz/FIJI.jpg" alt="" /></Col>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/2Z2tyBv/Frito-Lay.png" alt="" /></Col>
                        <Col className='col-lg-3 col-md-4 col-sm-6 col-4'><img src="https://i.ibb.co/1656BKG/Gatorade.png" alt="" /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Brands;