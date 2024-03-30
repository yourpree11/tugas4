import React from 'react'
import ProductCard from './Helper/ProductCard'

const TopProduct = () => {
  return (
    <div className='bg-gray-800 pt-[4rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto flex items-center justify-between'>
            <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>Top Products</h1>
            <button className='uppercase text-[13px] md:text-[15px] text-black-400'>View All Products</button>
        </div>
        <div className='grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto'>
            <div>
                <ProductCard title="God of War Ragnarok" 
                actualPrice='Rp.689,000'
                discountPrice='Rp.518,000'
                category='Adventure' 
                image='/images/g2.jpg'
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
            <div>
                <ProductCard title="The Last of Us Part II" 
                actualPrice='Rp.799,000'
                discountPrice='Rp.638,000'
                category='Adventure' 
                image='/images/g4.jpg'
                />
            </div>
            <div>
                <ProductCard title="Suicide Squad : Kill the Justice League" 
                actualPrice='Rp.809,000'
                discountPrice='Rp.710,000'
                category='Shooter' 
                image='/images/g5.jpg'
                />
            </div>
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
        
        </div>
    </div>
  )
}

export default TopProduct