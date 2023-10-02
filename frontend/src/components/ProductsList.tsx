import React from 'react'
import { ProductTypes } from '../types'
import ProductCard from './ProductCard'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ProductsList(props: { products: ProductTypes[] }) {
  const { products } = props;

  const breakpoints = {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <>
      <div className="container">
        <div>
          <div>
            <div className="content" style={{ marginTop: 50 }}>
              <h3 className='has-text-weight-semibold is-size-4'>Inspired by your shopping trends</h3>
            </div>
          </div>
          <Swiper
            modules={[Navigation,A11y]}
            spaceBetween={5}
            slidesPerView={4}
            navigation
            breakpoints={breakpoints}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}// Apply responsive breakpoints
          >

            <div className="columns is-multiline">
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="column">
                    {/* Ensure ProductCard is rendering correctly */}
                    <ProductCard item={item} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div>
          <div>
            <div className="content" style={{ marginTop: 50 }}>
              <h3 className='has-text-weight-semibold is-size-4'>Featured Products</h3>
            </div>
          </div>
          <Swiper
            modules={[Navigation,A11y]}
            spaceBetween={5}
            slidesPerView={4}
            navigation
            breakpoints={breakpoints}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}// Apply responsive breakpoints
          >

            <div className="columns is-multiline">
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="column">
                    {/* Ensure ProductCard is rendering correctly */}
                    <ProductCard item={item} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductsList
