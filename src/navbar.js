
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./navbar.css";
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
    return ( 
        <>
         <Navbar expand="lg" className="navbar" fixed="top" bg='dark'>
            <Container>
                <Navbar.Brand className='NavName' href="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link >
                        <Link className='link' to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link className='link' to="./aboutme">About Me</Link>
                    </Nav.Link>
                    <Nav.Link >
                        {/* <Link className='link' to="./contact">Contact</Link> */}
                    </Nav.Link>

        
                        <div className="icon-list">
                            <a href="https://github.com/HaroldKarlCaguing"><FontAwesomeIcon  className='icon' icon={faGithub} /></a>
                            <a href="https://www.facebook.com/HaroldCaguing/"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                            <a href="https://www.instagram.com/harold_caguing/"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>

                            
                            
                            
                        </div>
                    
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>

     );
}
 
export default NavBar;