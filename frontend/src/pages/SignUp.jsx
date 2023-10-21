import React from 'react'

import Card from '../components/Card'
import SignUpform from '../components/SignUp/SignUpForm'

const SignUp = () => {
  return (
    <>
        <Card className="sign-up" >
   
        <div className='inner-div'>
          <img className='image-banner' src='https://hips.hearstapps.com/hmg-prod/images/image001-1589236232.jpg?resize=980:*' />
        </div>
        <div className='inner-div'> 
          <SignUpform />
        </div>
        </Card>
    </>

    
  )
}

export default SignUp