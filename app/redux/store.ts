import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatch1,
  useSelector as useSelector1,
} from 'react-redux';
import { persistReducer } from 'redux-persist'
import type { TypedUseSelectorHook } from 'react-redux';
import { charactersReducer } from './slices/characters';
import { characterReducer } from './slices/character';
import { favoritesReducer } from './slices/favorites';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites'],
  blacklist: ['character', 'characters'],
};

const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
  favorites: favoritesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export type DispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export const useDispatch = () => useDispatch1<DispatchType>();
export const useSelector: TypedUseSelectorHook<RootStateType> = useSelector1;


