import React, {memo} from 'react';
import {Box, Text} from 'native-base';
import {CharacterStatus} from '../../screens/charactersList/types/characters';
import {isAliveCharacter} from '../services/getLifeStatus';
import COLORS from '../palette/color';
import VuiTypography from './VuiTypography';

interface OwnProps {
  status: CharacterStatus;
}

const StatusIndicator = ({status}: OwnProps) => {
  const baseStyles = {
    width: 2,
    height: 2,
    borderRadius: 50,
    backgroundColor: isAliveCharacter(status) ? COLORS.green : COLORS.red,
    marginRight: 2,
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Box {...baseStyles} />
      <Text color={COLORS.white} marginRight={3}>
        {isAliveCharacter(status) ? 'Alive' : 'Dead'}
      </Text>
      <VuiTypography styles={{marginRight: 5}}>-</VuiTypography>
    </Box>
  );
};

export default memo(StatusIndicator);
