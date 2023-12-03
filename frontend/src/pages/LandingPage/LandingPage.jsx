import React from 'react'
import Layout from '../../components/Layout/Layout'
import BrandingCard from '../../components/LandingPage/BrandingCard'
import FeaturedSection from '../../components/LandingPage/Featured'

const LandingPage = () => {
  return (
    <div>
        <Layout />
        <BrandingCard />
        <FeaturedSection />
    </div>
  )
}

export default LandingPage