import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface SearchInputProps {
  containerStyles?: StyleProp<ViewStyle>;
  imageStyles?: StyleProp<ImageStyle>;
  inputStyles?: StyleProp<ViewStyle>;
}

export const SearchInput = (props: TextInputProps & SearchInputProps) => {
  return (
    <View
      style={
        props.containerStyles
          ? [styles.containerStyles, props.containerStyles]
          : styles.containerStyles
      }>
      <Image
        style={
          props.imageStyles
            ? [styles.imageStyles, props.imageStyles]
            : styles.imageStyles
        }
        source={require('../assets/search.png')}
      />
      <TextInput
        {...props}
        style={
          props.inputStyles
            ? [styles.inputStyles, props.inputStyles]
            : styles.inputStyles
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyles: {
    height: 30,
    width: 30,
    marginRight: 18,
  },
  inputStyles: {
    width: 225,
    height: 42,
    borderColor: '#024059',
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
