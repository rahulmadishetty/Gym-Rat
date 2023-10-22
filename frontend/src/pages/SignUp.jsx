import React from 'react'

import Card from '../components/Card'
import SignUpform from '../components/SignUp/SignUpForm'

const SignUp = () => {
  return (
    <section className='d-flex align-items-center justify-content-center h-100 w-100'>
      <Card className="sign-up" >
        <div className='inner-div image'>
          <img className='image-banner' src='https://hips.hearstapps.com/hmg-prod/images/image001-1589236232.jpg?resize=980:*' />
        </div>
        <div className='inner-div'>
          <SignUpform />
        </div>
      </Card>
    </section>


  )
}

export default SignUp