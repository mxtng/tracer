import React from 'react';
import CheckInList from '../CheckInList';
import { Link } from 'react-router-dom';

const CheckInDetail = (props) => {
  const { checkInLink, customers } = props;
  return (
    <div>
      <p>
        Check-In Link:
        <Link to={'/' + checkInLink}>http://localhost:3000/{checkInLink}</Link>
      </p>
      <p>No. of Check-Ins: {customers.length}</p>
      <CheckInList list={customers} />
    </div>
  );
};

export default CheckInDetail;
