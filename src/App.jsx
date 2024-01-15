import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function Registration() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>

        <div className='name'>
          <label>Name</label>
          <input
            type='text'
            {...register('name', {
              required: 'Username is required!',
              minLength: { value: 3, message: 'Username must be more than 3 characters!' },
              maxLength: { value: 30, message: 'Username must be less than 30 characters!' },
            })}
            placeholder='Enter your name...'
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className='email'>
          <label>Email</label>
          <input
            type='text'
            {...register('email', {
              required: 'Email is required!',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: 'This is not a valid email format!',
              },
            })}
            placeholder='Enter your email...'
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className='password'>
          <label>Password</label>
          <input
            type='password'
            {...register('password', {
              required: 'Password is required!',
              minLength: { value: 10, message: 'Password must be more than 10 characters!' },
              pattern: {
                value: /[!@#$%^&*(),.?":{}|<>]/,
                message: 'Password must contain at least 1 special character!',
              },
            })}
            placeholder='Enter your password...'
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className='confirmPassword'>
          <label>Confirm Password</label>
          <input
            type='password'
            {...register('confirmPassword', {
              required: 'Confirm Password is required!',
              validate: (value) =>
                value === watch('password') || 'Confirm Password does not match!',
            })}
            placeholder='Confirm your password...'
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;

