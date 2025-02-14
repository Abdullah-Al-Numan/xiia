import TestimonialCard from 'components/molecules/Card/TestimonialCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const TestimonialList = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          clickableClass: 'swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        direction="horizontal"
        modules={[Pagination]}
        slideClass='swiper-slide'
        slideActiveClass='swiper-slide-active'
        
      >
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/paw.jfif"
            name="Paw Ager"
            company="Soundmade Ltd."
            testimony={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/ahad.jfif"
            name="Ahad Azimi"
            company="IFT Denmark ApS"
            testimony={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/ali.jfif"
            name="Ali El-Atbi"
            company="Bring & Clean Ltd."
            testimony={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList
