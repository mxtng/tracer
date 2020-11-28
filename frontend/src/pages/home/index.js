import React from 'react';
import withNav from '../../utils/withNav';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Card, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron className='mt-4'>
        <h1>Contact Tracing for Businesses</h1>
        <p>
          A customized solution for businesses that want to manage their own
          contact tracing in the event of this COVID-19 pandemic
        </p>
        <Link to='/register'>
          <Button>Register Now</Button>
        </Link>
      </Jumbotron>
      <Row>
        <Col className='mb-2 col-sm-12 col-md-4'>
          <Card bg='primary' style={{ height: '12rem' }}>
            <Card.Title className='text-center mt-2 mx-3 border-bottom'>
              <h4>Step One</h4>
            </Card.Title>
            <Card.Body style={{ color: '#515150' }}>Register with us</Card.Body>
          </Card>
        </Col>
        <Col className='mb-2 col-sm-12 col-md-4'>
          <Card bg='primary' style={{ height: '12rem' }}>
            <Card.Title className='text-center mt-2 mx-3 border-bottom'>
              <h4>Step Two</h4>
            </Card.Title>
            <Card.Body style={{ color: '#515150' }}>
              Sign in & generate a customized check-in link
            </Card.Body>
          </Card>
        </Col>
        <Col className='md-2 col-sm-12 col-md-4'>
          <Card bg='primary' style={{ height: '12rem' }}>
            <Card.Title className='text-center mt-2 mx-3 border-bottom'>
              <h4>Step Three</h4>
            </Card.Title>
            <Card.Body style={{ color: '#515150' }}>
              Customers check-in with generated link before entering the
              business premises
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withNav(Home);
