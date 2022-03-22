import React, {memo, useMemo} from 'react';
import {Box, Text} from 'native-base';
import COLORS from '../../../common/palette/color';
import {characterIsAlive} from '../services/getLifeStatus';
import type {CharacterStatus} from '../types/characters';
import VuiTypography from '../../../common/components/VuiTypography';

interface OwnProps {
  status: CharacterStatus;
}

const StatusIndicator = ({status}: OwnProps) => {
  const baseStyles = {
    width: 2,
    height: 2,
    borderRadius: 50,
    backgroundColor: characterIsAlive(status) ? COLORS.green : COLORS.red,
    marginRight: 2,
  };

  const printTitle = useMemo(
    () => (
      <Text color={COLORS.white} marginRight={3}>
        {characterIsAlive(status) ? 'Alive' : 'Dead'}
      </Text>
    ),
    [status],
  );

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Box {...baseStyles} />
      {printTitle}
      <VuiTypography styles={{ marginRight: 5 }}>-</VuiTypography>
    </Box>
  );
};

export default memo(StatusIndicator);
