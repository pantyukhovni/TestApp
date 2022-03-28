import React from 'react';
import CharacterCard from '../../../common/components/characterCard';
import type {Characters} from '../../../screens/charactersList/types/characters';

const FavoritesCharacterCard = (props: Characters) => {
  return <CharacterCard {...props} isFavorite={true} />;
};

export default FavoritesCharacterCard;
