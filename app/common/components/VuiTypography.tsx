import React, {forwardRef} from 'react';
import type {ForwardedRef, ReactNode, } from 'react';
import {Text, StyleSheet, StyleProp, TextProps} from 'react-native';
import type {TextStyle} from 'react-native';
import COLORS from '../palette/color';

export interface BasicVuiTypographyProps
  extends TextProps {
  children: ReactNode; // string Rext
  styles?: StyleProp<TextStyle>;
}

const VuiTypography = forwardRef(function VuiTypography(
  {children, styles: customStyles, ...otherProps}: BasicVuiTypographyProps,
  ref: ForwardedRef<any>, // TODO: исправить,
): JSX.Element {

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
