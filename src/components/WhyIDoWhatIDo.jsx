import React from 'react';

const WhyIDoWhatIDo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      {/* Image Section */}
      <div className="lg:w-1/2">
        {/* Replace with your image path */}
        <img className="object-cover w-full h-64 lg:h-auto aspect-video" src="/hand-holding.webp" alt="Unique Beauty" />
      </div>
      
      {/* Text Section */}
      <div className="lg:w-1/2 p-8">
        <h2 className="text-3xl font-semibold mb-6">Why do I do what I do?</h2>
        <p className="text-xl mb-4">
          No person is the same, and that’s one of my favorite things about photography. Being able to witness someone feel beautiful seeing themselves in their own natural beauty or capturing some of the best moments is why I love doing what I do.
        </p>
        <p className="text-xl mb-4">
          I love seeing the joy on peoples faces when they see the perspectives I captured of some of the most joyful moments in life. That's how I came up with my name.
        </p>
      </div>
    </div>
  );
};

export default WhyIDoWhatIDo;
