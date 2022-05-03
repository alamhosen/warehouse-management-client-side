import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () =>{
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Golden Grocery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && 
                                <>
                                <Nav.Link as={Link} to="manageinventories">
                                Manage Items
                                </Nav.Link>
                                <Nav.Link as={Link} to="additem">
                                Add Item
                                </Nav.Link>
                                <Nav.Link as={Link} to="myitems">
                                My items
                                </Nav.Link>
                                </>
                            }
                        {user ? 
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignout}>Sign Out</button>
                            :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>}

                            <Nav.Link as={Link} to="blogs">
                                Blogs
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;