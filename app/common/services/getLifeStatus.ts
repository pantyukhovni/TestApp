import type { CharacterStatus } from "../../screens/charactersList/types/characters";

export const isAliveCharacter = (status: CharacterStatus): boolean => {
  return status === 'Alive'
}