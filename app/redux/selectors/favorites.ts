import type { RootStateType } from '../store';

export const selectedFavoritesIdsSelector = ({ favorites }: RootStateType) => favorites.ids;
export const getFavorites = ({ favorites }: RootStateType) => favorites.favorites;