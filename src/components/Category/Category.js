import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Category = () => {
    return (
        <div className='container text-center'>
            <h2 className='my-5'>Shop by Category</h2>
            <Container fluid>
                <Row>
                    <Col>
                    <a href="#"><img src="https://i.ibb.co/q7xCrj1/breakfast.png" alt="" /></a>
                    <p><strong>Breakfast</strong></p>
                    </Col>  
                    <Col>
                    <a href="#"><img src="https://i.ibb.co/H7Mcbv2/baverage.png" alt="" /></a>
                    <p><strong>Baverage</strong></p>
                    </Col>  
                    <Col>
                    <a href="#"><img src="https://i.ibb.co/L5VxBPR/coffee.png" alt="" /></a>
                    <p><strong>Coffee</strong></p>
                    </Col>  
                    <Col>
                    <a href="#"><img src="https://i.ibb.co/N3GGVx6/snacks.png" alt="" /></a>
                    <p><strong>Snacks</strong></p>
                    </Col>  
                    <Col>
                    <a href="#"><img src="https://i.ibb.co/4TMq3zG/cans.png" alt="" /></a>
                    <p><strong>Cans Foods</strong></p>
                    </Col>  
                    <Col>
                    <a href="#"><img src="https://i.ibb.co/zSyWtmv/baby-food.png" alt="" /></a>
                    <p><strong>Baby Food</strong></p>
                    </Col>  
                </Row>
            </Container>
        </div>
    );
};

export default Category;