import React from 'react'

import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='d-flex header justify-content-between'>
        <div className='logo d-flex justify-content-between align-items-center px-3'>
            Gym Rat
        </div>
        <div>
            <Navbar />
        </div>
    </div>
  )
}

export default Header