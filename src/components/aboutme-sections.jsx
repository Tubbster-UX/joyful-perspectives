import React from 'react';

const AboutSection = () => {
    return (
        <div className="flex flex-col lg:pt-40 pt-10 lg:flex-row">
            <div className="lg:w-1/2 p-14">
                <h1 className="text-5xl font mb-6">Who is the person behind the camera?</h1>
                <p className="text-xl mb-4">
                    Hi, my name is Maddy Brooks. I am 18 years old and I have been growing my love and skill for photography for a while now.
                </p>
                <p className="text-xl mb-4">
                    About 5 years ago, I picked up my sister's camera just wanting to play around with it, so I took some pictures of random things and objects just to see what I could do.
                </p>
                <p className="text-xl mb-8">
                    As soon as I heard the “click” and my first picture was captured, I knew I was hooked.
                </p>
                <button className="px-6 py-2 border-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
                    Book Now
                </button>
            </div>
            <div className="lg:w-1/2">
                {/* Replace with your image path */}
                <img className="object-cover w-full h-64 lg:h-auto aspect-video p-2" src="/maddy.png" alt="About Me" />
            </div>
        </div>
    );
};

export default AboutSection;
