import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';

const Register = () => {
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
          <h3>Account Registration</h3>
          <hr />
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
            <label htmlFor='exampleInputEmail1'>Contact Number*</label>
            <input
              className='form-control'
              id='number'
              name='number'
              type='number'
              ref={register({ required: true })}
            />
            {errors.number && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
        </div>

        <p>* - required fields</p>
        <Button type='submit' className='px-4 py-2'>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
