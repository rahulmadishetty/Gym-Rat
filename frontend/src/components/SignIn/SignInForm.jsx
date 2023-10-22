import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-final-form';

import { SIGN_UP } from '../../constants/routes'
import InputField from '../Input/InputField';
import { composeValidators, required, validateEmail } from '../../utils/validations';

const SignInform = () => {
  const handleSubmit = (formData) => {
    console.log(formData)

  }

  return (
    <div>
      <h2 className='m-3'> Sign In</h2>
      <p>Lets start your wonderful journey with fitness!</p>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
            <InputField name="email" label="Email" placeholder="Email*" validate={composeValidators(required, validateEmail)} type="text" />
            <InputField
              name="password"
              label="Password"
              placeholder="Password*"
              validate={composeValidators(required)}
              type="password"
            />
            <div className="buttons my-4">
              <button type="submit" disabled={submitting}>
                Sign In
              </button>
            </div>
          </form>
        )}
      />
      <div className='m-3'>
        Don't have an account? <Link to={SIGN_UP.INDEX}> Sign up </Link>
      </div>
    </div>
  )
}

export default SignInform