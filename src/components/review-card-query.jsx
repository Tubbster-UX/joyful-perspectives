import { gql } from 'graphql-tag';

const GET_REVIEWCARDS_QUERY = gql`
query ReviewCards {
    reviewCards {
        id
        review
        reviewPhoto {
          url
        }
      }
  }
`;

export default GET_REVIEWCARDS_QUERY;
