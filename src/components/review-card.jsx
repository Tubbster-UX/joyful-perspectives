import React from 'react';

const ReviewCard = () => {
    return (
        <div className="max-w-md mx-auto overflow-hidden aspect-[7/13] shadow-lg relative" style={{ userSelect: 'none' }}>
            <img
                className="absolute h-full w-full object-cover"
                src="https://images.squarespace-cdn.com/content/v1/64a1dc1b1409001ff0d77d20/22fb9bc4-78a5-48d2-bf14-9a873cee941f/Screenshot+2023-08-18+at+9.41.58+PM.png?format=300w"
                alt="A happy couple"
            />
            <div className="p-6 before:absolute before:bg-black/25 before:inset-0 before:z-0">
                <blockquote className="relative z-10 text-white text-xl font-bold">
                    “Our session with Cali was so much fun! She was so good at making it relaxed and captured our genuine
                    smiles and personalities with her lens. I loved her enthusiasm and professionalism while she took our
                    pictures. Her artistic flare with her editing and her attention to detail blew me away. Her pictures are
                    absolutely stunning!”
                </blockquote>
            </div>
        </div>
    );
};

export default ReviewCard;
