import React from 'react';

const ReviewCard = (props) => {
    const { data } = props;

    if (!data) {
        return null; // or return a loading indicator, or some default content
      }
    return (
                <div className="max-w-md mx-auto overflow-hidden aspect-[7/13] shadow-lg relative" style={{ userSelect: 'none' }}>
                    <img
                        className="absolute h-full w-full object-cover"
                        src={data.reviewPhoto.url}
                        alt="Review Photo"
                    />
                    <div className="p-6 before:absolute before:bg-black/25 before:inset-0 before:z-0">
                        <blockquote className="relative z-10 text-white text-xl font-bold">
                        {data.review}
                        </blockquote>
                    </div>
                </div>
    );
};

export default ReviewCard;