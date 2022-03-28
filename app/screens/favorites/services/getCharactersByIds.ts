import { query } from '../../../services/apollo';
import GET_CHARACTER_BY_IDS from './query/charactersByIds';

export const getCharactersByIds = async (ids: string[]) => {
  const {
    data
  } = await query({
    query: GET_CHARACTER_BY_IDS,
    variables: { ids }
  });

  return data;
}