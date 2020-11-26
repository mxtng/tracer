import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';

const Signin = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (form) => {
    console.log(form);
  };

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <div className='mt-4 mx-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <h3>Sign In</h3>
          <hr />
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

export default Signin;
