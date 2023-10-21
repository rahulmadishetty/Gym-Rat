import React from 'react'

import Card from '../components/Card'
import SignInform from '../components/SignIn/SignInForm'

const SignIn = () => {
  return (
    <Card className="sign-up" >
      <div className='inner-div'>
        <SignInform />
      </div>
      <div className='inner-div'>
        <img className='image-banner' src='https://hips.hearstapps.com/hmg-prod/images/image001-1589236232.jpg?resize=980:*' />
      </div>
    </Card>
  )
}

export default SignIn