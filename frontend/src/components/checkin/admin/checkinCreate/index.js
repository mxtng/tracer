import React from 'react';
import api from '../../../../api/api';
import { Card, Button } from 'react-bootstrap';

const CheckInCreate = ({ onGenerateLink }) => {
  const clickHandle = () => {
    api
      .post('/api/checkin/create-new-link', {})
      .then((res) => {
        onGenerateLink(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card className='text-center m-4 py-5' bg='secondary'>
      <Card.Body>
        <Button onClick={() => clickHandle()}>Generate Check-In Link</Button>
      </Card.Body>
    </Card>
  );
};

export default CheckInCreate;
