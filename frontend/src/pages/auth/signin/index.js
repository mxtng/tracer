import React, { useState, useEffect } from 'react';
import { authLogin } from '../../../actions/auth';
import api from '../../../api/api';
import withNav from '../../../utils/withNav';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Alert } from 'react-bootstrap';

const Signin = () => {
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

  const onSubmit = ({ email, password }) => {
    api
      .post('/api/signin', {
        email,
        password,
      })
      .then((res) => {
        dispatch(authLogin(res.data));
      })
      .catch((err) => {
        setErrorMsg(err.response.data.error);
      });

    return <Redirect to='/dashboard' />;
  };

  if (isAuth) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='mt-4 mx-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <h3>Sign In</h3>
          <hr />
          {errorMsg && <Alert variant={'danger'}>{errorMsg}</Alert>}
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
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
            <label htmlFor='password'>Password</label>
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
        </div>

        <Button type='submit' className='px-4 py-2'>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default withNav(Signin);
