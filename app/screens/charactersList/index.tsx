import React, {useMemo} from 'react';
import {SafeAreaView, FlatList, ListRenderItemInfo, Text} from 'react-native';
import {useSelector} from '../../redux/store';
import {
  charactersListSelector,
  loadingStatusSelector,
} from '../../redux/selectors/characters';
import VuiBox from '../../common/components/VuiBox';
import Character from './components/characterCard';
import COLORS from '../../common/palette/color';
import SplashScreen from '../../common/components/SplashScreen';
import {Characters} from './types/characters';

const CharacterList = () => {
  const charactersList = useSelector(charactersListSelector);
  const loading = useSelector(loadingStatusSelector);

  // TODO: заменить на спиннер
  if (loading) return <SplashScreen label="Загрузка" />;

  const renderItem = ({item}: ListRenderItemInfo<Characters>) => {
    return <Character {...item} />;
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
