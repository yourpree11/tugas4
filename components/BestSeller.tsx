import React from 'react'
import ProductCard from './Helper/ProductCard'

const BestSeller = () => {
  return (
    <div className='bg-gray-900 pt-[4rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto flex items-center justify-between'>
            <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>
                Best Seller
            </h1>
            <button className='uppercase text-[13px] md:text-[15px] text-black-400'>
                View All Products
            </button>
        </div>
        <div className='grid grid-cols-1 mt-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] 
        mx-auto'>
             <div>
                <ProductCard title="Elden Ring" 
                actualPrice='Rp.750,000'
                discountPrice='Rp.540,000'
                category='RPG' 
                image='/images/g6.jpg'
                />
            </div>
            <div>
                <ProductCard title="EAFC 24" 
                actualPrice='Rp.770,000'
                discountPrice='Rp.540,000'
                category='Sport' 
                image='/images/g7.jpeg'
                />
            </div>
            <div>
                <ProductCard title="Grand Theft Auto VI" 
                actualPrice='Rp.990,000'
                discountPrice='Rp.870,000'
                category='Action' 
                image='/images/g8.jpg'
                />
            </div>
            <div>
                <ProductCard title="Marvel Spiderman 2" 
                actualPrice='Rp.820,000'
                discountPrice='Rp.730,000'
                category='Action' 
                image='/images/g3.jpg'
                 />
            </div>
        </div>
    </div>
  )
}

export default BestSeller