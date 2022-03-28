import React from 'react';
import {Center} from 'native-base';
import VuiBox from '../../common/components/VuiBox';
import VuiTypography from '../../common/components/VuiTypography';

import COLORS from '../../common/palette/color';

const WIPComponent = ({text}: {text?: string}): JSX.Element => {
  return (
    <VuiBox bgColor={COLORS.grey}>
      <Center style={{height: '100%'}}>
        <VuiTypography styles={{fontSize: 20}}>
          Экран {text ?? ''} в разработке
        </VuiTypography>
      </Center>
    </VuiBox>
  );
};

export default WIPComponent;
