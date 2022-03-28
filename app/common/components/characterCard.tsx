import React from 'react';
import type {Characters} from '../../screens/charactersList/types/characters';
import {characterByIdSelector} from '../../redux/selectors/characters';
import {useSelector} from '../../redux/store';
import {Box} from 'native-base';
import {Pressable, StyleSheet} from 'react-native';
import CharacterImg from './characterImg';
import VuiTypography from './VuiTypography';
import FavoriteIcon from '../../res/favoriteIcon';
import StatusIndicator from './statusIndicator';
import COLORS from '../palette/color';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CharacterParamList} from 'app/navigation/types';

interface OwnProps extends Characters {
  isFavorite: boolean;
  goToScreen?: () => void;
  toggleFavorite?: () => void;
}

// id ONLY
const CharacterCard = ({
  id,

  isFavorite,
  toggleFavorite = () => {},
}: OwnProps) => {
  const navigation = useNavigation<NavigationProp<CharacterParamList>>();

  const character = useSelector(characterByIdSelector(id));

  const {gender, image, name, species, status} = character;
  
  return (
    <Box
      flex="1"
      flexDirection="row"
      marginBottom={4}
      backgroundColor={COLORS.paleGrey}
      borderRadius={10}>
      <Pressable
        onPress={() => navigation.navigate('Character', {id})}
        style={{flexDirection: 'row'}}>
        <CharacterImg img={image} />
        <Box padding={5} maxWidth={200}>
          <VuiTypography styles={styles.nameCharacter}>{name}</VuiTypography>
          <Box
            flex="1"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%">
            <StatusIndicator status={status} />
            <VuiTypography>{species}</VuiTypography>
          </Box>
          <Box flexDirection="row" width="100%">
            <Box flex="1">
              <VuiTypography>Gender:</VuiTypography>
              <VuiTypography>{gender}</VuiTypography>
            </Box>
            <Box>
              <Pressable onPress={toggleFavorite}>
                <FavoriteIcon color="#fff" isFavorite={isFavorite} />
              </Pressable>
            </Box>
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  nameCharacter: {
    fontSize: 18,
  },
});

export default CharacterCard;
