import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterList from '../screens/charactersList';
import {useDispatch} from '../redux/store';
import {fetchCharacters} from '../redux/slices/characters';

const RootNavigation = (): JSX.Element => {
  const dispatch = useDispatch();
  const {Navigator, Screen} = createNativeStackNavigator();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <Navigator>
      <Screen name="charactersList" component={CharacterList} />
    </Navigator>
  );
};

export default RootNavigation;
