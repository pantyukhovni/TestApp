import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Characters, CharactersRequest, CharactersResponse } from '../../screens/charactersList/types/characters';
import { Info } from '../../screens/charactersList/types/info';
import { getCharacters } from '../../screens/charactersList/services/getCharacters';

const sliceName = 'characters';

export interface CharactersState {
  loading: boolean,
  characters: Characters[],
  info: Info
}

const initialState: CharactersState = {
  loading: false,
  characters: [],
  info: {
    count: 0,
    next: 0,
    pages: 0,
    prev: 0
  }
}


export const fetchCharacters = createAsyncThunk<
  CharactersResponse,
  CharactersRequest
>(
  `${sliceName}/fetchCharacters`,
  async ({ page, filter }) => {
    let hasFilters;
    if (filter) {
      hasFilters = Object.keys(filter).length
    }

    const charactersData = await getCharacters();
    console.log('charactersData', charactersData);
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

        // TODO: нормализовать и сохранить данные
        console.log('HERE', charactersData);
      })
      .addCase(fetchCharacters.rejected, (state, { error }) => {
        state.loading = false;
        console.log('error', error);
      })
  }
});

export const { reducer: charactersReducer } = slice;

export default slice;