import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-final-form';

import { SIGN_IN, ONBOARDING } from '../../constants/routes';
import InputField from '../Input/InputField';
import { composeValidators, required, validateConfirmPassword, validateEmail, validatePassword } from '../../utils/validations';
import BaseRequest from '../../services/requests/Base';

const SignUpform = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (formData, form) => {
    try {
      delete formData.password_confirmation;
      BaseRequest.post("http://localhost:3000/auth/signup", formData)
      setIsAlertVisible(true)
      navigate(ONBOARDING.INDEX)
      form.reset()
      form.resetFieldState('name');
      form.resetFieldState('email');
      form.resetFieldState('password');
      form.resetFieldState('password_confirmation');


    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <h2 className='m-3'> Sign Up</h2>
      <p>Lets start your wonderful journey with fitness!</p>
      <div class={`alert alert-success mx-2 ${isAlertVisible ? "" : "d-none"}`} role="alert">
        Account created successfully. Please login!
      </div>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }}
        render={({ handleSubmit, submitting, values, form }) => (
          <form onSubmit={event => handleSubmit(event, form)} className='d-flex flex-column align-items-center'>
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
