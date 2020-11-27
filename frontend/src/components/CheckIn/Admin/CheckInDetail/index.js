import React from 'react';
import CheckInList from '../CheckInList';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CheckInDetail = (props) => {
  const { checkInLink, customers } = props;
  return (
    <div>
      <Card bg='warning' className='mb-4 p-2'>
        <Card.Text>
          Check-In Link:{' '}
          <Link to={'/' + checkInLink}>
            http://localhost:3000/{checkInLink}
          </Link>
        </Card.Text>
        <Card.Text>No. of Check-Ins: {customers.length}</Card.Text>
      </Card>
      <CheckInList list={customers} />
    </div>
  );
};

export default CheckInDetail;
