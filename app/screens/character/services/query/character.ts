import { gql } from '@apollo/client';
import CHARACTER from '../../../../common/query/character';

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
    }
  }
`;

export default GET_CHARACTER;