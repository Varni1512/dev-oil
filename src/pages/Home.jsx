import React from 'react'
import Hero from '../components/Hero'
import BestSellers from '../components/Seller'
import ProductOfTheDay from '../components/Product'
import PremiumOilsStore from '../components/PremiumOilsStore'
import WhyChooseUs from '../components/WhyChooseUs'
import CustomerTestimonials from '../components/CustomerTestimonials'
import VideoTestimonials from '../components/VideoTestimonials'
import BlogSection from '../components/BlogSection'
import NutritionExpertsSection from '../components/NutritionExpertsSection'
import FAQSection from '../components/FAQSection'
import FooterBanner from '../components/FooterBanner'


function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <ProductOfTheDay />
      <PremiumOilsStore />
      <WhyChooseUs />
      <CustomerTestimonials />
      <VideoTestimonials />
      <BlogSection />
      <NutritionExpertsSection />
      <FAQSection />
      <FooterBanner />
    </>
  )
}

export default Home


