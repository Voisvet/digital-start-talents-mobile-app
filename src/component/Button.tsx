import React from 'react';
import {Button as ParentButton, ButtonProps} from 'react-native-elements';
import {StyleSheet} from 'react-native';

export const Button = (props: ButtonProps) => {
  return (
    <ParentButton
      {...props}
      buttonStyle={
        props.buttonStyle
          ? [styles.buttonStyles, props.buttonStyle]
          : styles.buttonStyles
      }
      containerStyle={
        props.containerStyle
          ? [styles.containerStyles, props.containerStyle]
          : styles.containerStyles
      }
      titleStyle={
        props.titleStyle
          ? [styles.titleStyle, props.titleStyle]
          : styles.titleStyle
      }
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 14,
    fontWeight: '400',
  },
  buttonStyles: {
    backgroundColor: '#F28C0E',
    borderRadius: 100,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 64,
    paddingLeft: 64,
  },
  containerStyles: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
