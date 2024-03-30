import BestSeller from "@/components/BestSeller"
import FeaturedProduct from "@/components/FeaturedProduct"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"
import TopProduct from "@/components/TopProduct"
import React from 'react'

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="overflow-hidden">
        <Nav />
        <Hero />
        <FeaturedProduct />
        <TopProduct />
        <BestSeller />
      </div>
    </div>
  )
}

export default HomePage