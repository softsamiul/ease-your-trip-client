import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase/useFirebase';

const HeaderTop = () => {
    const {user} = useFirebase();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <span>Follow: </span>
                            <Nav.Link href="#features"><i className="fab fa-instagram"></i></Nav.Link>
                            <Nav.Link href="#pricing"><i className="fab fa-facebook-square"></i></Nav.Link>
                            <Nav.Link href="#pricing"><i className="fab fa-youtube-square"></i></Nav.Link>
                            <Nav.Link href="#pricing"><i className="fab fa-twitter-square"></i></Nav.Link>
                            <Nav.Link href="#pricing"><i className="fas fa-phone-volume"></i>: +91 7872345678</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign In</Nav.Link>
                            <Nav.Link href="#deets">Dashboard</Nav.Link>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link href="#deets">{user.displayName}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderTop;