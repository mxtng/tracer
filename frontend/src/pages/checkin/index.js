import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import { useForm } from 'react-hook-form';

import { Card, Container, Button } from 'react-bootstrap';

const Checkin = ({ location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [linkInfo, setLinkInfo] = useState(null);

  const { register, handleSubmit, errors } = useForm();

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && errorMsg) {
    return <div>{errorMsg}</div>;
  }

  const onSubmit = (formData) => {
    const checkInData = { ...formData, checkInLink };

    api
      .post('/api/checkin/customer-checkin', checkInData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class='d-flex justify-content-center'>
      <Card className='m-5 p-5 w-lg-50 shadow p-3 mb-5 bg-white rounded'>
        <h3>Check-In Id: {checkInLink}</h3>
        <h3>Business Name: {linkInfo && linkInfo.businessName}</h3>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Customer Details</h3>

          <div className='form-group'>
            <label htmlFor='fullname'>Full Name</label>
            <input
              className='form-control'
              id='fullName'
              name='fullName'
              type='text'
              ref={register({ required: true })}
            />
            {errors.fullName && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='nric'>NRIC</label>
            <input
              className='form-control'
              id='nric'
              name='nric'
              type='number'
              ref={register({ required: true })}
            />
            {errors.nric && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='temperature'>Temperature</label>
            <input
              className='form-control'
              id='temperature'
              name='temperature'
              type='number'
              ref={register({ required: true })}
            />
            {errors.temperature && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <Button type='submit'>Check In</Button>
        </form>
      </Card>
    </div>
  );
};

export default Checkin;
