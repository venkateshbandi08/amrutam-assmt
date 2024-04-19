import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <div style={{textDecoration:'none'}}>
          <Navbar.Brand className='brand-name' style={{cursor: 'pointer', fontWeight: 'bold', fontSize:"24px", color: 'rgb(45, 112, 45)', paddingLeft: '5px', paddingRight:'5px', borderRadius: '3px' }}> A m r u t a m </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <button className="nav-link brand-hover" style={{marginRight: '20px'}}>
              <FaUser /> Profile
            </button>
            <button className="nav-link brand-hover" style={{marginRight: '20px'}}>
              <FaShoppingCart /> Cart
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
