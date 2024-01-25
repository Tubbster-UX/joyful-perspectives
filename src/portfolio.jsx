import React from 'react';
import PortfolioCard from './components/portfolio-card';
import Header from './components/header';

function Portfolio() {
    return (
        <div className='lg:pt-28'>
            <Header imageSrc="haley-robert.webp" title1="Portfolio" />
        <div className='flex lg:flex-row flex-col gap-4 justify-center p-16 items-center'>
            <PortfolioCard imageSrc="/landscapes.webp" title="Landscapes" />
            <PortfolioCard imageSrc="/portraits.webp" title="Portraits" />
            <PortfolioCard imageSrc="/couples.webp" title="Couples" />
        </div>
        </div>
    );
}

export default Portfolio;
