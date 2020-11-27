import React, { Fragment, useState } from 'react';
import api from '../../api/api';
import { useForm } from 'react-hook-form';

import { Modal, Button } from 'react-bootstrap';

const CheckInForm = ({ checkInLink, linkInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkInSuccess, setCheckInSuccess] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (formData) => {
    setIsLoading(true);
    const checkInData = { ...formData, checkInLink };

    api
      .post('/api/checkin/customer-checkin', checkInData)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        reset({});
        setCheckInSuccess(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Modal show={checkInSuccess}>
        <div className='text-center p-4'>
          <h4>Check-In Successful</h4>
        </div>
      </Modal>
      <div>
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
          {isLoading ? (
            <Button disabled>Checking In...</Button>
          ) : (
            <Button type='submit'>Check In</Button>
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default CheckInForm;
