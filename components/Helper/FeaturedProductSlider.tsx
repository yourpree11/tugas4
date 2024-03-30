import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const FeaturedProductSlider = () => {
  return (
    <Carousel additionalTransfrom={0} 
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass='item'
    >
      <ProductCard title="Assasin's Creed Mirage" 
        actualPrice='Rp.750,000'
        discountPrice='Rp.430,000'
        category='Action' 
        image='/images/g1.jpg'
        />
        <ProductCard title="God of War Ragnarok" 
        actualPrice='Rp.689,000'
        discountPrice='Rp.518,000'
        category='Adventure' 
        image='/images/g2.jpg'
        />
        <ProductCard title="Marvel Spiderman 2" 
        actualPrice='Rp.820,000'
        discountPrice='Rp.730,000'
        category='Action' 
        image='/images/g3.jpg'
        />
        <ProductCard title="The Last of Us Part II" 
        actualPrice='Rp.799,000'
        discountPrice='Rp.638,000'
        category='Adventure' 
        image='/images/g4.jpg'
        />
        <ProductCard title="Suicide Squad : Kill the Justice League" 
        actualPrice='Rp.809,000'
        discountPrice='Rp.710,000'
        category='Shooter' 
        image='/images/g5.jpg'
        />
        <ProductCard title="Elden Ring" 
        actualPrice='Rp.750,000'
        discountPrice='Rp.540,000'
        category='RPG' 
        image='/images/g6.jpg'
        />
        <ProductCard title="EAFC 24" 
        actualPrice='Rp.770,000'
        discountPrice='Rp.540,000'
        category='Sport' 
        image='/images/g7.jpeg'
        />
        <ProductCard title="Grand Theft Auto VI" 
        actualPrice='Rp.990,000'
        discountPrice='Rp.870,000'
        category='Action' 
        image='/images/g8.jpg'
         />   
       </Carousel>
  )
}

export default FeaturedProductSlider