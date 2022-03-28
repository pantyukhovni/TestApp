import React, {useCallback, useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {useDispatch} from '../../../redux/store';
import {add, deleteFavorite} from '../../../redux/slices/favorites';
import type {Characters} from '../types/characters';
import CharacterCard from '../../../common/components/characterCard';
import {CharacterParamList} from 'app/navigation/types';

const Character = (props: Characters) => {
  const {id} = props;
  // TODO: забрать персонажа из нормализованного стора
  const navigation = useNavigation<NavigationProp<CharacterParamList>>();
  const dispatch = useDispatch();

  const [isFavorite, setFavorite] = useState<boolean>(false);

  const goToCurrentCharacter = useCallback(() => {
    navigation.navigate('Character', {id}); // TODO: типизировать
  }, [id]);

  const addFavorites = useCallback(() => {
    setFavorite(prev => !prev);

    if (!isFavorite) dispatch(add({id}));
    else dispatch(deleteFavorite({id}));
  }, [id, isFavorite]);

  return (
    <CharacterCard
      {...props}
      isFavorite={isFavorite}
      goToScreen={goToCurrentCharacter}
      toggleFavorite={addFavorites}
    />
  );
};

export default Character;
