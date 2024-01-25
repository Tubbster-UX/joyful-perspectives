
import React from 'react';

const Header = () => {
    return (
<div
  className="w-full h-[80vh] bg-no-repeat bg-cover bg-center flex items-center justify-center relative"
  style={{ backgroundImage: 'url("/maddy.png")' }}
>
  {/* Overlay: Use a pseudo-element or an extra div */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Ensure the text is on top of the overlay */}
  <div className="text-center text-white z-10">
    <p className="text-2xl italic font-light mb-2">love the process</p>
    <h1 className="md:text-6xl text-4xl font-bold">JOYFUL PERSPECTIVES</h1>
    <p className="text-2xl italic font-light mt-2">love the product</p>
  </div>
</div>



    );
};

export default Header;
