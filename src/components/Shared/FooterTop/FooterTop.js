import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FooterTop.css'

const FooterTop = () => {
    return (
        <div className='footer-top-container'>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col className='col-6 col-lg-3 col-md-4'>
                    <h5 className='mb-3'>About us</h5>
                    <p><a href="#">Aim</a></p>
                    <p><a href="#">Vision</a></p>
                    <p><a href="#">Testimonials</a></p>
                    </Col>
                    <Col className='col-6 col-lg-3 col-md-4'>
                    <h5 className='mb-3'>Contact Us</h5>
                    <p><a href="#">Uttara</a></p>
                    <p><a href="#">Bonani</a></p>
                    <p><a href="#">GUlshan</a></p>
                    <p><a href="#">Bashundhara</a></p>
                    </Col>
                    <Col className='col-6 col-lg-3 col-md-4'>
                    <h5 className='mb-3'>Get Help</h5>
                    <p><a href="#">Help Center</a></p>
                    <p><a href="#">Contact</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Terms</a></p>
                    </Col>
                    <Col className='col-6 col-lg-3 col-md-4'>
                    <h5 className='mb-3'>Social Media</h5>
                    <p><a href="#">Facebook</a></p>
                    <p><a href="#">Instragram</a></p>
                    <p><a href="#">Twitter</a></p>
                    <p><a href="#">Youtube</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterTop;