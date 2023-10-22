import React from 'react'

import Card from '../components/Card'
import SignInform from '../components/SignIn/SignInForm'

const SignIn = () => {
  return (
    <section className='d-flex align-items-center justify-content-center h-100 w-100'>
      <Card className="sign-up" >
        <div className='inner-div'>
          <SignInform />
        </div>
        <div className='inner-div image'>
          <img className='image-banner' src='https://hips.hearstapps.com/hmg-prod/images/image001-1589236232.jpg?resize=980:*' />
        </div>
      </Card>
    </section>

  )
}

export default SignIn