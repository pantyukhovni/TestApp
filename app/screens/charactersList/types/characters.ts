import type { Episode } from './episode';
import { Info } from './info';

export type Characters = {
  id: string,
  name: string,
  status: CharacterStatus,
  species: string,
  type: string,
  gender: string,
  origin: string,
  location: string,
  image: string,
  episode: Episode
}

export type FilterCharacter = {
  name: string
  status: string
  species: string
  type: string
  gender: string
}

export interface CharactersResponse {
  info: Info,
  results: Characters[]
};

export interface CharactersRequest {
  page?: string,
  filter?: FilterCharacter
}

export type CharacterStatus = 'Dead' | 'unknown' | 'Alive'