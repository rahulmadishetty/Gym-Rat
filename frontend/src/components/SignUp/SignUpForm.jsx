import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-final-form';

import { SIGN_IN } from '../../constants/routes';
import InputField from '../Input/InputField';
import { composeValidators, required, validateConfirmPassword, validateEmail, validatePassword } from '../../utils/validations';
import BaseRequest from '../../services/requests/Base';

const SignUpform = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    try {
      delete formData.password_confirmation;
      BaseRequest.post("http://localhost:3000/auth/signup", formData)
      navigate(SIGN_IN.INDEX)

    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <h2 className='m-3'> Sign Up</h2>
      <p>Lets start your wonderful journey with fitness!</p>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
            <InputField name="name" label="Name" placeholder="Name*" validate={required} type="text" />
            <InputField name="email" label="Email" placeholder="Email*" validate={composeValidators(required, validateEmail)} type="text" />
            <InputField
              name="password"
              label="Password"
              placeholder="Password*"
              validate={composeValidators(required, validatePassword)}
              type="password"
            />
            <InputField
              name="password_confirmation"
              label="Password Confirmation"
              placeholder="Password Confirmation*"
              validate={composeValidators(required, value => validateConfirmPassword(value, values))}
              type="password"
            />
            <div className="my-4">
              <button type="submit" disabled={submitting}>
                Sign Up
              </button>
            </div>
          </form>
        )}
      />
      <div className='m-3'>
        Already have an account? <Link to={SIGN_IN.INDEX}>  Sign In </Link>
      </div>
    </div>
  );
};

export default SignUpform;