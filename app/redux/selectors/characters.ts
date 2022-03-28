import type { RootStateType } from '../store';

export const charactersListSelector = ({ characters: { characters } }: RootStateType) => characters;
export const loadingStatusSelector = ({ characters: { loading } }: RootStateType) => loading;
export const charactersInfoSelector = ({ characters: { info } }: RootStateType) => info;

export const characterIdsSelector = ({ characters: { charactersIdsList } }: RootStateType) => charactersIdsList;
export const characterByIdSelector = (id: string) =>
  ({ characters: {
    characterRecord
  } }: RootStateType) => characterRecord[id];