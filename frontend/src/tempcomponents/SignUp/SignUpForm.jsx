import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-final-form';

import { SIGN_IN, ONBOARDING, BASE_URL } from '../../constants/routes';
import InputField from '../Input/InputField';
import { composeValidators, required, validateConfirmPassword, validateEmail, validatePassword } from '../../utils/validations';
import BaseRequest from '../../services/requests/Base';
import { OnboardingContext } from '../../context/Onboarding';

const SignUpform = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const navigate = useNavigate();
  const { login } = useContext(OnboardingContext)

  console.log("i am here", BASE_URL)

  const handleSubmit = async (formData, form) => {
    try {
      console.log("submitting.....", BASE_URL)
      delete formData.password_confirmation;
      const { data } = await BaseRequest.post(`${BASE_URL}/auth/signup`, formData)
      login(data.token, data.userId)
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
      <h2 className='m-3 color-black'> Sign Up</h2>
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
      <div className='m-3 color-gray'>
        Already have an account? <Link to={SIGN_IN.INDEX}>  Sign In </Link>
      </div>
    </div>
  );
};

export default SignUpform;
