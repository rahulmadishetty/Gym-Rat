import React from 'react'

import Layout from '../components/Layout/Layout'

const Home = () => {
  return (
    <div className='h-100'>
        <Layout />
        <section className='d-flex align-items-center h-100 justify-content-center'>
            We are generating workout for you. Please wait...
        </section>
    </div>
  )
}

export default Home