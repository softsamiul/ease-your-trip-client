import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import './Header';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div>
            <div className="mb-2">
                {/* <HeaderTop></HeaderTop> */}
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-blue-800 text-white">
                <Container>
                    <Navbar.Brand as = {Link} className="text-white font-extrabold" to="/home"><i className="fas fa-meteor mr-1"></i> EaseYourTrip</Navbar.Brand>
                    {/* <span>Live free, live while</span> */}
            
                    <Navbar.Toggle aria-controls="responsive-navbar-nav text-white" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-white">
                        <Nav.Link as = {Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as = {Link} className="text-white" to="/services">Services</Nav.Link>
                        <Nav.Link as = {Link} className="text-white" to="/contact">Contact</Nav.Link>
                        <Nav.Link as = {Link} className="text-white" to="/about">About</Nav.Link>
                        
                        </Nav>
                        <Nav style={{alignItems:"center", color:"white !important"}}>
                            {/* Sign in or Sign out btn */}
                            {user.email || user.displayName ? <Nav.Link as = {Link} to="/home" onClick={logOut} className="text-white">Sign Out</Nav.Link> : <Nav.Link as = {Link} className="text-white" to="/signin">Sign In</Nav.Link> }
                            
                            <Nav.Link className="text-white" >{user.displayName}</Nav.Link>
                            {/* <Nav.Link className="text-white" >{user.email}</Nav.Link> */}
                            <button className="bg-gray-100">
                                {user.email || user.displayName ? <NavDropdown title="Dashboard" id="collasible-nav-dropdown" className="text-white" >
                                    <NavDropdown.Item >Dashboard</NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/mytrips">My Trips</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/managealltrips">Manage All Trips</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/addnewtrip">Add New Trip</Link></NavDropdown.Item>
                                </NavDropdown> : ""}
                            </button>
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