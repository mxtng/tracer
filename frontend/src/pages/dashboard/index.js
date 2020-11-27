import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import CheckInDetail from '../../components/CheckInDetail';
import withNav from '../../utils/withNav';

import { Button, Card } from 'react-bootstrap';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generateLink, setGenerateLink] = useState(false);
  const [checkInDetail, setCheckInDetail] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`/api/checkin/admin`)
      .then(({ data }) => {
        setCheckInDetail(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [generateLink]);

  const clickHandle = () => {
    api
      .post('/api/checkin/create-new-link', {})
      .then(({ data }) => {
        console.log(data);
        setGenerateLink(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='mt-4'>
      <h2>Dashboard</h2>
      <hr />

      {isLoading ? (
        'Fetching data...'
      ) : !checkInDetail ? (
        <Card className='text-center m-4 py-5' bg='secondary'>
          <Card.Body>
            <Button onClick={() => clickHandle()}>
              Generate Check-In Link
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <CheckInDetail {...checkInDetail} />
      )}
    </div>
  );
};

export default withNav(Dashboard);
