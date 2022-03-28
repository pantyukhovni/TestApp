import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import CharacterList from '../screens/charactersList';
import Character from '../screens/character';
import {CharacterParamList} from './types';

const CharactersNavigation = (): JSX.Element => {
  const {Navigator, Screen} = createNativeStackNavigator<CharacterParamList>();

  const screenOption: NativeStackNavigationOptions = {
    headerBackTitleVisible: false,
    title: 'Персонаж',
  };

  return (
    <Navigator>
      <Screen
        name="CharacterList"
        component={CharacterList}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Character" component={Character} options={screenOption} />
    </Navigator>
  );
};

export default CharactersNavigation;
