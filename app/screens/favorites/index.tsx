import React, {useEffect, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from '../../redux/store';
import {
  selectedFavoritesIdsSelector,
  getFavorites,
} from '../../redux/selectors/favorites';
import {fetchCharactersByIds} from '../../redux/slices/favorites';
import VuiBox from '../../common/components/VuiBox';
import VuiTypography from '../../common/components/VuiTypography';
import COLORS from '../../common/palette/color';
import FavoritesCharacterCard from './components/favoritesCharacterCard';
import {Characters} from '../charactersList/types/characters';

const Favorite = () => {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(selectedFavoritesIdsSelector);
  const allFavorites = useSelector(getFavorites);

  useEffect(() => {
    console.log('favoritesIds', favoritesIds);

    if (favoritesIds.length) {
      dispatch(fetchCharactersByIds(favoritesIds));
    }
  }, [favoritesIds]);

  const renderItem = ({item}: ListRenderItemInfo<Characters>) => {
    return <FavoritesCharacterCard {...item} />;
  };

  const contentToRender = useMemo(() => {
    if (!allFavorites.length) {
      return (
        <VuiTypography styles={styles.title}>
          Список избранного пуст
        </VuiTypography>
      );
    }

    return (
      <FlatList
        data={allFavorites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
  }, [allFavorites]);

  return (
    <SafeAreaView>
      <VuiBox bgColor={COLORS.grey} styles={{height: '100%'}}>
        {contentToRender}
      </VuiBox>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Favorite;
