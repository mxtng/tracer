import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import withNav from '../../utils/withNav';
import Alert from 'react-bootstrap/Alert';

import CheckInDetail from '../../components/CheckIn/Admin/CheckInDetail';
import NewCheckIn from '../../components/CheckIn/Admin/CheckInCreate';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generateLink, setGenerateLink] = useState(false);
  const [checkInDetail, setCheckInDetail] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    api
      .get(`/api/checkin/admin`)
      .then(({ data }) => {
        setCheckInDetail(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.response.data.error);
      });
  }, [generateLink]);

  return (
    <div className='mt-4'>
      <h2>Dashboard</h2>
      <hr />

      {isLoading ? (
        'Fetching data...'
      ) : errorMsg ? (
        <Alert variant='danger'>{errorMsg}</Alert>
      ) : checkInDetail ? (
        <CheckInDetail {...checkInDetail} />
      ) : (
        <NewCheckIn onGenerateLink={setGenerateLink} />
      )}
    </div>
  );
};

export default withNav(Dashboard);
