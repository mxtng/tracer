import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const nav = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <NavLink to='/'>BRAND</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>
              <NavLink to='/about'>About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/dashboard'>Dasboard</NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <NavLink to='/register' className='mx-2'>
              <Button>Register</Button>
            </NavLink>
            <NavLink to='/login'>
              <Button>Sign In</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default nav;
