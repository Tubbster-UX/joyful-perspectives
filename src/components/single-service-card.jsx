import React from 'react';


const ImageStack = ({ topImage, bottomImage }) => {
  return (
    <div className="relative inline-block max-w-full" style={{ height: 'auto' }}>
      <img
        src={bottomImage}
        alt="Bottom"
        className="w-full object-cover rounded-lg shadow-md"
        style={{ maxWidth: '466px', height: 'auto' }} // Maximum width for larger screens
      />
    </div>
  );
};

const SingleServiceCard = () => {
  return (
    <div className='p-10'>
      <div className="p-10 flex justify-center items-center">
        <ImageStack
          bottomImage="cameron.webp" // Replace with your image path
        />
      </div>
      <h2 className='text-4xl' >Seniors</h2>
      <button className="mt-4 py-2 px-8 border-2 w-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
        Book Now
      </button>
    </div>
  );
};

export default SingleServiceCard;