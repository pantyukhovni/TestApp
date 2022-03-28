import { gql } from '@apollo/client';

const GET_CHARACTER_BY_IDS = gql`
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      name
      type
      image
      gender
      species
      status
      id
    }
  }
`;

export default GET_CHARACTER_BY_IDS;