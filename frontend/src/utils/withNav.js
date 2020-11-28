import React, { Fragment } from 'react';

import Nav from '../components/nav';
import Container from 'react-bootstrap/Container';

const withNav = (Component) => (props) => {
  return (
    <Fragment>
      <Nav />
      <Container>
        <Component {...props} />
      </Container>
    </Fragment>
  );
};

export default withNav;
