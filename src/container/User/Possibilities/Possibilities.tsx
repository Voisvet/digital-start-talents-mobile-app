import React from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Possibilities = observer(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bonus}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/sirius.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>15.11</Text>
        </View>
      </View>
      <View style={styles.bonus}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/ecodict.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>05.11</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 18,
  },
  bonus: {
    alignItems: 'center',
    width: '100%',
    height: 153,
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  image: {
    maxWidth: '50%',
    maxHeight: '50%',
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#024059',
    borderRadius: 50,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  title: {
    fontWeight: '400',
    fontSize: 18,
    color: '#fff',
  },
});
