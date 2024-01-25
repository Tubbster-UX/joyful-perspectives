import React from 'react';

const ImageStack = ({ topImage, bottomImage }) => {
  return (
    <div className="relative inline-block max-w-full" style={{ height: 'auto' }}>
      <img
        src={bottomImage}
        alt="Bottom"
        className="lg:w-full w-[20rem] object-cover rounded-lg shadow-md"
        style={{ maxWidth: '466px', height: 'auto' }} // Maximum width for larger screens
      />
      <img
        src={topImage}
        alt="Top"
        className="absolute rounded-lg shadow-md lg:w-[75%] w-[75%] right-[-7rem] max-w-[340px] top-[1rem] xl:right-[-14rem] lg:right-[-11rem] transform translate-x-[-50%] translate-y-[-50%]"

      />
    </div>
  );
};

const DualServiceCard = () => {
  return (
    <div className='p-10'>
      <div className="p-10 flex justify-center items-center">
        <ImageStack
          topImage="ruby-nation.webp" // Replace with your image path
          bottomImage="ring.webp" // Replace with your image path
        />
      </div>
      <h2 className='text-4xl' >Couples and Engagements</h2>
      <button className="mt-4 py-2 px-8 border-2 w-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
        Book Now
      </button>
    </div>
  );
};

export default DualServiceCard;