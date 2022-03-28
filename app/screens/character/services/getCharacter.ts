import { query } from '../../../services/apollo';
import { GET_CHARACTER } from './query/character';

export const getCharacter = async (id: string) => {
  const {
    data
  } = await query({
    query: GET_CHARACTER,
    variables: { id }
  });
  return data;
}