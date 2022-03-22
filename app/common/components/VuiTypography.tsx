import React, {forwardRef} from 'react';
import type {ForwardedRef, ReactNode, HTMLAttributes} from 'react';
import {Text, StyleSheet, StyleProp} from 'react-native';
import type {TextStyle} from 'react-native';
import COLORS from '../palette/color';

export interface BasicVuiTypographyProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  styles?: StyleProp<TextStyle>;
}

const VuiTypography = forwardRef(function VuiTypography(
  {children, styles: customStyles, ...otherProps}: BasicVuiTypographyProps,
  ref: ForwardedRef<any>, // TODO: исправить,
): JSX.Element {
  console.log('customStyles', customStyles);
  return (
    <Text {...otherProps} ref={ref} style={[styles.typography, customStyles]}>
      {children}
    </Text>
  );
});

const styles = StyleSheet.create({
  typography: {
    color: COLORS.white,
  },
});

export default VuiTypography;
