import { gql } from '@apollo/client';

const CHARACTER = gql`
  fragment character on Character {
    name
    type
    image
    gender
    species
    status
  }
`;

export default CHARACTER;