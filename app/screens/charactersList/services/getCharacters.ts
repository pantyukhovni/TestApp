import { query } from '../../../services/apollo';
import { GET_CHARACTERS } from './query/charactersList';
import { CharactersResponse } from '../types/characters';

export const getCharacters = async (): Promise<CharactersResponse> => {
  const {
    data: {
      characters
    }
  } = await query({
    query: GET_CHARACTERS
  });

  return characters;
};
