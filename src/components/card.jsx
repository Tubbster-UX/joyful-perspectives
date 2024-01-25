import React from 'react';

import { useQuery, gql } from '@apollo/client';

// GraphQL query
const GET_CARDS_QUERY = gql`
query PortfolioCards {
    portfolioCards {
      buttonText
      createdAt
      id
      publishedAt
      title
      updatedAt
      image {
        url
      }
    }
  }
  
`;


const Card = () => {

    const { loading, error, data } = useQuery(GET_CARDS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <>
            {data.portfolioCards.map(({ id, title, buttonText, image }) => (
                <div className="max-w-sm mx-auto" key={id}>
                    <div className="relative">
                        <img className="w-full h-60 aspect-video object-cover" src={image.url} alt={title} />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                            <h2 className="text-white text-center text-xl font-bold mb-2 ">{title}</h2>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-white/65">
                        <button className="mt-4 py-2 px-8 border-2 w-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
                            {buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;
