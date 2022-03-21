import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { charactersReducer } from './slices/characters';

export const store = configureStore({
  reducer: {
    characters: charactersReducer
  }
});

export type DispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export const useDispatch = () => useReduxDispatch<DispatchType>();
export const useSelector: TypedUseSelectorHook<RootStateType> = useReduxSelector;


