import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import HomeHeader from './components/home-page-header'
import Card from './components/card'
import ReviewCard from './components/review-card'
import { useEffect, useState } from "react"
import { useQuery } from '@apollo/client';
import GET_REVIEWCARDS_QUERY from './components/review-card-query';
import ContactForm from './components/contact-me';

function App() {
  const { data } = useQuery(GET_REVIEWCARDS_QUERY);

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 992) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='min-h-screen font-Cormorant-Garamond bg-cream'>
      <HomeHeader />
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
        <button className="mt-4 py-2 px-8 border-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
                    Contact Me
                </button>
      </div>
      <div className='flex lg:flex-row md:flex-col gap-4 flex-col mb-32 mx-auto justify-center'>
        <Card />
      </div>
      <div className='p-10'>
        <h2 className='text-4xl mb-4'>KIND WORDS</h2>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
        >
          {data && data.reviewCards.map((reviewCard) => (
            <SwiperSlide key={reviewCard.id}>
              <ReviewCard data={reviewCard} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ContactForm />
    </div>
  )
}

export default App
