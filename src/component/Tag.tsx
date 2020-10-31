import React from 'react';
import {Button as ParentButton, ButtonProps} from 'react-native-elements';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface TagProps {
  isActive?: boolean;
}

export const Tag = (props: ButtonProps & TagProps) => {
  const buttonStyle: StyleProp<ViewStyle>[] = [styles.buttonStyles];
  if (props.isActive) {
    buttonStyle.push(styles.active);
  }
  if (props.buttonStyle) {
    buttonStyle.push(props.buttonStyle);
  }

  return (
    <ParentButton
      {...props}
      buttonStyle={buttonStyle}
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
    fontSize: 12,
    fontWeight: '400',
  },
  buttonStyles: {
    backgroundColor: '#F28C0E',
    borderRadius: 100,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 90,
  },
  containerStyles: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    //
    // elevation: 3,
  },
  active: {
    backgroundColor: '#B3B4B5',
  },
});
