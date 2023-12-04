import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-final-form';
import { RotatingLines } from "react-loader-spinner"

import { BASE_URL, HOME, ONBOARDING, SIGN_UP } from '../../constants/routes'
import InputField from '../Input/InputField';
import { composeValidators, required, validateEmail } from '../../utils/validations';
import BaseRequest from '../../services/requests/Base';
import { OnboardingContext } from '../../context/Onboarding';

const SignInform = () => {
  const navigate = useNavigate();
  const [loaderVisible, setLoaderVisible] = useState(false);
  const { login } = useContext(OnboardingContext)

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (formData) => {
    setLoaderVisible(true)
    try {
      const { data } = await BaseRequest.post(`${BASE_URL}/auth/login`, formData)


      localStorage.setItem("token", data.token)
      localStorage.setItem("userId", data.userId)
      localStorage.setItem("userName", data.name)
      login(data.token, data.userId, data.name)
      if (data.profileCheck) {
        navigate(HOME.INDEX)
      } else {
        navigate(ONBOARDING.INDEX)
      }
    } catch (err) {
      setErrorMessage(true)
      console.log(err)
    }
  }

  return (
    <div>
      <h2 className='m-3 color-black'> Sign In</h2>
      <p>Lets start your wonderful journey with fitness!</p>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
            <div className={`error ${errorMessage ? "" : "d-none"}`}>Invalid email or password</div>
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
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="20"
                  visible={loaderVisible}
                />
                <span className='ms-3'>
                  Sign In
                </span>
              </button>
            </div>
          </form>
        )}
      />
      <div className='m-3 color-gray'>
        Don't have an account? <Link to={SIGN_UP.INDEX}> Sign up </Link>
      </div>
    </div>
  )
}

export default SignInform