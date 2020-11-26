import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { authLogin } from '../../actions/auth';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Alert } from 'react-bootstrap';

const Register = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const { register, handleSubmit, errors } = useForm();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setErrorMsg('');
    }, 3000);

    return () => clearTimeout(timerId);
  }, [errorMsg]);

  const onSubmit = ({ email, password, password2, ...businessData }) => {
    if (password !== password2) {
      return setErrorMsg('Passwords do not match');
    }

    axios
      .post('http://localhost:5000/api/register', {
        email,
        password,
        business: businessData,
      })
      .then((res) => {
        dispatch(authLogin(res.data));
      })
      .catch((err) => {
        setErrorMsg(err.response.data.error);
      });

    return <Redirect to='/' />;
  };

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <div className='mt-4 mx-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <h3>Account Registration</h3>
          <hr />
          <p>* - required field</p>
          {errorMsg && <Alert variant={'danger'}>{errorMsg}</Alert>}
          <div className='form-group'>
            <label htmlFor='email'>Email address*</label>
            <input
              className='form-control'
              id='email'
              name='email'
              type='text'
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password*</label>
            <input
              className='form-control'
              id='password'
              name='password'
              type='password'
              ref={register({ required: true })}
            />
            {errors.password && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Confirm Password*</label>
            <input
              className='form-control'
              id='password2'
              name='password2'
              type='password'
              ref={register({ required: true })}
            />
            {errors.password2 && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
        </div>

        <div className='mb-5'>
          <h3>Business Details</h3>
          <hr />
          <div className='form-group'>
            <label htmlFor='owner'>Business Owner*</label>
            <input
              className='form-control'
              id='owner'
              name='owner'
              type='text'
              ref={register({ required: true })}
            />
            {errors.owner && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Business Name*</label>
            <input
              className='form-control'
              id='name'
              name='name'
              type='text'
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Business Address*</label>
            <input
              className='form-control'
              id='address'
              name='address'
              type='text'
              ref={register({ required: true })}
            />
            {errors.address && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='contact'>Contact Number*</label>
            <input
              className='form-control'
              id='contact'
              name='contact'
              type='number'
              ref={register({ required: true })}
            />
            {errors.contact && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
        </div>

        <Button type='submit' className='px-4 py-2'>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
