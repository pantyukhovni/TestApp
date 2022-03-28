import React, {useEffect} from 'react';
import Favorite from '../screens/favorites';
import {useDispatch} from '../redux/store';
import {fetchCharacters} from '../redux/slices/characters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import HomeIcon from '../res/homeIcon';
import FavoriteIcon from '../res/favoriteIcon';
import {Text, View} from 'native-base';
import CharactersNavigation from './CharactersNavigation';
import COLORS from '../common/palette/color';
import {RootStackParamList} from './types';

const RootNavigation = (): JSX.Element => {
  const dispatch = useDispatch();

  const Tab = createBottomTabNavigator<RootStackParamList>();

  useEffect(() => {
    dispatch(fetchCharacters({}));
  }, []);

  const homeOptions: BottomTabNavigationOptions = {
    title: 'Главная',
    headerShown: false,
    tabBarLabel: 'Main',
    tabBarIcon: ({color}) => <HomeIcon color={color} />,
  };

  const favoritesOptions: BottomTabNavigationOptions = {
    title: 'Избранное',
    tabBarLabel: 'Favorites',
    tabBarIcon: ({color}) => <FavoriteIcon color={color} />,
  };

  const navigationOptions: BottomTabNavigationOptions = {
    tabBarInactiveTintColor: COLORS.black,
    tabBarActiveTintColor: COLORS.pink,
  };

  return (
    <Tab.Navigator screenOptions={navigationOptions}>
      <Tab.Screen
        name="Home"
        component={CharactersNavigation}
        options={homeOptions}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={favoritesOptions}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
