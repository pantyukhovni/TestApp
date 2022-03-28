import React, {forwardRef, useMemo} from 'react';
import type {ForwardedRef, ReactNode, HTMLAttributes} from 'react';
import type {StyleProp, TextStyle} from 'react-native';
import {View, StyleSheet} from 'react-native';

export interface BasicVuiBoxProps extends HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  children: ReactNode;
  styles?: StyleProp<TextStyle>;
}

const useStyles = (...styles: unknown[]) => {
  return useMemo(
    () => ({
      // styles
    }),
    [styles],
  );
};

const VuiBox = forwardRef(function VuiBox(
  {bgColor, children, styles: customStyles, ...otherProps}: BasicVuiBoxProps,
  ref: ForwardedRef<any>, // TODO: исправить
): JSX.Element {
  return (
    <View
      {...otherProps}
      ref={ref}
      style={[styles.wrapper, customStyles, {backgroundColor: bgColor ?? ''}]}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
});

export default VuiBox;
