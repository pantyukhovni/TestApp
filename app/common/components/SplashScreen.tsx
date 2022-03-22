import React from 'react';
import {Box, Spinner, Heading} from 'native-base';
import COLORS from '../palette/color';

interface OwnProps {
  label?: string;
}

const SplashScreen = ({label}: OwnProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      bg={COLORS.darkGrey}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box display="flex" flexDirection="row">
        <Spinner size="lg" color={COLORS.white} />
        {label && (
          <Heading marginLeft={2} color={COLORS.white}>
            {label}
          </Heading>
        )}
      </Box>
    </Box>
  );
};

export default SplashScreen;
