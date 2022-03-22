import type { RootStateType } from '../store';

export const getCharactersList = ({ characters }: RootStateType) => characters.characters;
export const getLoadingStatus = ({ characters }: RootStateType) => characters.loading;
