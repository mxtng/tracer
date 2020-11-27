import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import { Card } from 'react-bootstrap';

import CheckInForm from '../../components/checkin/checkInForm';

const Checkin = ({ location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [linkInfo, setLinkInfo] = useState(null);

  const checkInLink = location.pathname.split('/')[1];

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`/api/checkin/verify-link/${checkInLink}`)
      .then((res) => {
        setLinkInfo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg('Oops...something went wrong');
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !linkInfo || !checkInLink) {
    return <div className='d-flex justify-content-center mt-5'>Loading...</div>;
  }

  if (!isLoading && errorMsg) {
    return <div>{errorMsg}</div>;
  }

  return (
    <div className='d-flex justify-content-center'>
      <Card className='m-5 p-5 w-lg-50 shadow p-3 mb-5 bg-white rounded'>
        <CheckInForm checkInLink={checkInLink} linkInfo={linkInfo} />
      </Card>
    </div>
  );
};

export default Checkin;
