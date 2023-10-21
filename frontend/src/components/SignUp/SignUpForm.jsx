import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import { SIGN_IN } from '../../constants/routes';
import InputField from '../Input/InputField';
import { composeValidators, required, validateConfirmPassword, validateEmail, validatePassword } from '../../utils/validations';


const SignUpform = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h2 className='m-3'> Sign Up</h2>
      <p>Lets start your wonderful journey with fitness!</p>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
            <InputField name="name" label="Name" placeholder="Name" validate={required} type="text" />
            <InputField name="email" label="Email" placeholder="Email" validate={composeValidators(required, validateEmail)} type="text" />
            <InputField
              name="password"
              label="Password"
              placeholder="Password"
              validate={composeValidators(required, validatePassword)}
              type="password"
            />
            <InputField
              name="password_confirmation"
              label="Password Confirmation"
              placeholder="Password Confirmation"
              validate={composeValidators(required, value => validateConfirmPassword(value, values))}
              type="password"
            />
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
      <div className='m-3'>
        Already have an account? <Link to={SIGN_IN.INDEX}>  Login </Link>
      </div>
    </div>
  );
};

export default SignUpform;
