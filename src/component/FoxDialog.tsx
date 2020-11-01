import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from './Button';

export interface FoxDialogProps {
  message: string;
  onClose: () => any;
}

export const FoxDialog = (props: FoxDialogProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/tim_dialog.png')}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.message}</Text>
        </View>
        <Button title={'Ок!'} onPress={() => props.onClose()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00000088',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: 348,
    height: 515,
  },
  innerContainer: {
    position: 'absolute',
    width: 290,
    height: 150,
    bottom: 330,
    alignItems: 'center',
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 24,
  },
});
