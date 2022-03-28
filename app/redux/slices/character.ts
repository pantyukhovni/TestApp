import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacter } from '../../screens/character/services/getCharacter';


const sliceName = 'character';

const initialState = {}

export const fetchCharacter = createAsyncThunk(
  `${sliceName}/fetchCharacter`,
  async (id: string) => {
    const character = await getCharacter(id);
    return character;
  }
);

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
      })
      .addCase(fetchCharacter.rejected, (state, { error }) => {
        console.log('error', error);
      })
  }
});

export const { reducer: characterReducer } = slice;

export default slice;