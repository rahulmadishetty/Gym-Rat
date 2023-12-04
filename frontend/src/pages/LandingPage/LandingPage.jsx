import React from 'react'
import Layout from '../../tempcomponents/Layout/Layout'
import BrandingCard from '../../tempcomponents/LandingPage/BrandingCard'
import FeaturedSection from '../../tempcomponents/LandingPage/Featured'

const LandingPage = () => {
  return (
    <div>
        <Layout>
        <BrandingCard />
        <FeaturedSection />
        </Layout>
  
    </div>
  )
}

export default LandingPage