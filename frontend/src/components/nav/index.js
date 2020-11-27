import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../actions/auth';

import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <NavLink to='/'>BRAND</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            {isAuth ? <NavLink to='/dashboard'>Dasboard</NavLink> : ''}
          </Nav>
          <Nav>
            {isAuth ? (
              <Button className='mx-2' onClick={() => dispatch(authLogout())}>
                Logout
              </Button>
            ) : (
              <Fragment>
                <NavLink to='/register' className='mx-2'>
                  <Button>Register</Button>
                </NavLink>
                <NavLink to='/login' className='mx-2'>
                  <Button>Sign In</Button>
                </NavLink>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
