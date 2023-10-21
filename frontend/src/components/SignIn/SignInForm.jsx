import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { SIGN_UP } from '../../constants/routes'

const SignInform = () => {
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData)

  }

  return (
    <div>
      <h2 className='m-3'> Sign In</h2>
      <p>Lets start your wonderful journey with fitness!</p>
      <section>
        <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
          <input required name='email' type='email' placeholder='Email' className='m-3 p-2 col-lg-8 col-sm-10 offset-lg-2' onChange={handleOnChange} />
          <input required name="password" type='password' placeholder='Password' className='m-3 p-2 col-lg-8 col-sm-10 offset-lg-4' onChange={handleOnChange} />
          <button className='m-4' type='submit'> Sign In</button>
        </form>
      </section>
      <div className='m-3'>
        Don't have an account? <Link to={SIGN_UP.INDEX}> Sign up </Link>
      </div>
    </div>
  )
}

export default SignInform