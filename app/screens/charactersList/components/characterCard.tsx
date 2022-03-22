import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from 'native-base';
import CharacterImg from './characterImg';
import StatusIndicator from './statusIndicator';
import type {CharacterStatus} from '../types/characters';
import COLORS from '../../../common/palette/color';
import VuiTypography from '../../../common/components/VuiTypography';

interface OwnProps {
  name: string;
  image: string;
  status: CharacterStatus;
  gender: string;
  species: string;
}

const CharacterCard = ({name, status, species, gender, image}: OwnProps) => {
  return (
    <Box
      flex="1"
      flexDirection="row"
      marginBottom={4}
      backgroundColor={COLORS.paleGrey}
      borderRadius={10}>
      <CharacterImg img={image} />
      <Box padding={5} maxWidth={220}>
        <VuiTypography styles={styles.nameCharacter}>{name}</VuiTypography>
        <Box
          flex="1"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <StatusIndicator status={status} />
          <VuiTypography>{species}</VuiTypography>
        </Box>
        <Box flex="1">
          <VuiTypography>Gender:</VuiTypography>
          <VuiTypography>{gender}</VuiTypography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  nameCharacter: {
    fontSize: 18,
  },
});

export default CharacterCard;
