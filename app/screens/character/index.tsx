import React, {useEffect} from 'react';

import {useDispatch} from '../../redux/store';
import {fetchCharacter} from '../../redux/slices/character';
import {useRoute, RouteProp} from '@react-navigation/core';
import WIPComponent from '../WIP';
import {CharacterParamList} from '../../navigation/types';

const Character = () => {
  const {params} = useRoute<RouteProp<CharacterParamList, 'Character'>>();
  const {id: characterId} = params;

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: переделать. забираем данные со стора по id
    dispatch(fetchCharacter(characterId));
  }, [characterId]);

  return <WIPComponent text={`с персонажем <${characterId}>`} />;
};

export default Character;
