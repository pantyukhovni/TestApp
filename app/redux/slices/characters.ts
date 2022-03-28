import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Characters, CharactersRequest, CharactersResponse } from '../../screens/charactersList/types/characters';
import { Info } from '../../screens/charactersList/types/info';
import { getCharacters } from '../../screens/charactersList/services/getCharacters';

const sliceName = 'characters';

export interface CharactersState {
  loading: boolean,
  error: unknown,
  characters: Characters[],
  info: Info
  charactersIdsList: string[]
  characterRecord: Record<string, Characters>
}

const initialState: CharactersState = {
  loading: false,
  error: null,
  characters: [],
  info: {
    count: 0,
    next: 0,
    pages: 0,
    prev: 0
  },
  characterRecord: {},
  charactersIdsList: []
}


export const fetchCharacters = createAsyncThunk<CharactersResponse, CharactersRequest>(
  `${sliceName}/fetchCharacters`,
  async () => {

    const charactersData = await getCharacters();

    return charactersData;
  }
);

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, { payload: charactersData }) => {

        state.loading = false;

        const {
          info,
          results
        } = charactersData;

        // TODO: нормализация стора
        // const newResults = results.map(({
        //   episode,
        //   id,
        //   ...otherSettings
        // }) => ({
        //   [id]: otherSettings
        // }));
        state.charactersIdsList = results.map(({ id }) => id);
        state.characterRecord = results.reduce((acc, current) => {
          // acc[current.id] = current
          acc = {
            ...acc,
            [current.id]: current
          }
          return acc;
        }, {});

        state.characters = results;
        state.info = info;
      })
      .addCase(fetchCharacters.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      })
  }
});

export const { reducer: charactersReducer } = slice;

export default slice;