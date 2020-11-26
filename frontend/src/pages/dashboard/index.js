import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
  const [link, setLink] = useState('');
  const userId = useSelector(({ auth }) => auth.currentUser._id);
  const businessId = '5fbf93cac6eac03ce5ab263b';

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/business/${businessId}/link`)
      .then(({ data }) => {
        setLink(data.checkInLink);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickHandle = () => {
    axios
      .post('http://localhost:5000/api/checkin/create-new-link', {
        businessId,
        checkInLink: businessId.slice(0, 12) + '_checkin',
      })
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
