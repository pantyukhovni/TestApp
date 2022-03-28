import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Characters } from '../../screens/charactersList/types/characters'; //TODO: вынести в common types
import { getCharactersByIds } from '../../screens/favorites/services/getCharactersByIds';
import { GraphQLError } from 'graphql';


const sliceName = 'favorites';

interface Favorites {
  ids: string[];
  favorites: Characters[];
}

const initialState: Favorites = {
  ids: [],
  favorites: []
}

export const fetchCharactersByIds = createAsyncThunk(
  `${sliceName}/fetchCharactersByIds`,
  async (ids: string[]) => {
    const characterByIdsData = await getCharactersByIds(ids);
    return characterByIdsData;
  }
);

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    add(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      state.ids.push(id);
    },
    deleteFavorite(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      const newIds = state.ids.filter((itemId) => {
        return (itemId !== id)
      });

      state.ids = newIds;
    },
    reset(state) {
      state.ids = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersByIds.fulfilled, (state, { payload: characterByIdsData }) => {
        state.favorites = characterByIdsData.charactersByIds;
      })
      .addCase(fetchCharactersByIds.rejected, (state, { error }) => {
        const sss = error as GraphQLError
        console.log('error', { ...sss });
      })
  }
});

export const {
  reducer: favoritesReducer,
  actions: {
    add,
    deleteFavorite,
    reset,
  }
} = slice;
