import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebase';

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <div>
            <div className="mb-2">
                {/* <HeaderTop></HeaderTop> */}
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as = {Link} to="/home">Ease Your Trip</Navbar.Brand>
                    {/* <span>Live free, live while</span> */}
            
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/home">Home</Nav.Link>
                        <Nav.Link as = {Link} to="/services">Services</Nav.Link>
                        <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as = {Link} to="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as = {Link} to="/signin">Sign In</Nav.Link>
                            <Nav.Link onClick={logOut}>Sign Out</Nav.Link>
                            <Nav.Link href="#deets">Dashboard</Nav.Link>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link href="#deets">{user.displayName}</Nav.Link>
                        </Nav>
                        {/* <Nav.Link href="#deets">Sign Out</Nav.Link>
                        <Nav.Link href="#deets">Jhon Doe</Nav.Link> */}
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;