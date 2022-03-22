import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Text} from 'native-base';
import {useSelector} from '../../redux/store';
import {
  getCharactersList,
  getLoadingStatus,
} from '../../redux/selectors/characters';
import VuiBox from '../../common/components/VuiBox';
import CharacterCard from './components/characterCard';
import COLORS from '../../common/palette/color';
import SplashScreen from '../../common/components/SplashScreen';

const CharacterList = () => {
  const charactersList = useSelector(getCharactersList);
  const loading = useSelector(getLoadingStatus);

  if (loading) return <SplashScreen label="Загрузка" />;

  // TODO: убрать any
  const renderItem = ({item}: any) => {
    return <CharacterCard {...item} />;
  };

  return (
    <SafeAreaView>
      <VuiBox bgColor={COLORS.grey}>
        <FlatList
          data={charactersList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </VuiBox>
    </SafeAreaView>
  );
};

export default CharacterList;
