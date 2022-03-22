import type { CharacterStatus } from "../types/characters";

export const characterIsAlive = (status: CharacterStatus): boolean => {
  if (
    status === 'Dead' ||
    status === 'unknown'
  ) return false;
  return true;
}