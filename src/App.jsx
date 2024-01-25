import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Header from './components/header'
import Card from './components/card'
import ReviewCard from './components/review-card'

import { Pagination } from 'swiper/modules';

function App() {
  return (
    <div className='min-h-screen font-Cormorant-Garamond bg-cream'>
      <Header />
      <div className="flex flex-col items-center justify-center lg:p-32 p-10 text-center">
        <p className="text-2xl lg:text-3xl mb-4 font-medium">
          Taking photos is more than a way to get money to me. It's my passion and something I really enjoy.
        </p>
        <p className="text-2xl lg:text-3xl mb-4 font-medium">
          I love to capture the genuine joyful moments in life and have the opportunity to take photos in interesting and unique ways.
        </p>
        <p className="text-2xl lg:text-3xl font-medium">
          Get in touch for more information, I'd love to chat with you!
        </p>
        <button className="mt-4 py-2 px-8 border-2 border-black font-medium text-lg hover:bg-black hover:text-white transition-colors duration-300">
          Contact Me
        </button>
      </div>
      <div className='flex mb-32 mx-auto justify-center'>
        <Card imageSrc="ruby-nation.webp" title="Couple Photos" buttonText="View Portfolio"></Card>
        <Card imageSrc="ruby-nation.webp" title="Couple Photos" buttonText="View Portfolio"></Card>
        <Card imageSrc="ruby-nation.webp" title="Couple Photos" buttonText="View Portfolio"></Card>
      </div>
      <div className='p-10'>
  <div className="flex justify-between items-start"> {/* Align items to the start */}
    <div className="flex flex-col justify-start">
      <h2 className='text-4xl mb-4'>KIND WORDS</h2>
    </div>
    <Swiper
      slidesPerView={'3'}
      spaceBetween={10}
      // Add other Swiper props as needed
    >
      <SwiperSlide><ReviewCard/></SwiperSlide>
      <SwiperSlide><ReviewCard/></SwiperSlide>
      <SwiperSlide><ReviewCard/></SwiperSlide>
      <SwiperSlide><ReviewCard/></SwiperSlide>
      <SwiperSlide><ReviewCard/></SwiperSlide>
      <SwiperSlide><ReviewCard/></SwiperSlide>
    </Swiper>
  </div>
</div>

    </div>
  )
}

export default App
