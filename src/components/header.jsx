import React from 'react';

const Header = ({ imageSrc, title1, title2 }) => {
  return (
    <header className="relative">
      <img src={imageSrc} alt="Background" className="w-full h-[80vh] object-cover" />
      <div className="absolute bottom-0 left-0 p-10">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-Cormorant-Garamond font-bold text-white leading-none">
          <span className="block">{title1}</span>
          <span className="block">{title2}</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
