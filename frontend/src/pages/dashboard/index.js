import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';

import { Button } from 'react-bootstrap';

const Dashboard = () => {
  const [link, setLink] = useState('');

  useEffect(() => {
    api
      .get(`/api/business/link`)
      .then(({ data }) => {
        setLink(data.checkInLink);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickHandle = () => {
    api
      .post('/api/checkin/create-new-link', {})
      .then(({ data }) => {
        setLink(data.checkInLink);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {link ? (
        <Link to={link}>http://localhost:3000/{link}</Link>
      ) : (
        <Button onClick={() => clickHandle()}>Generate Check-In Link</Button>
      )}
    </div>
  );
};

export default Dashboard;
