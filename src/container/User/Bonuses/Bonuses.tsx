import React from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import FitImage from 'react-native-fit-image';

export const Bonuses = observer(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bonus}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/litres.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ЛитРес</Text>
          <Text style={styles.description}>Интернет-магазин книг</Text>
        </View>
      </View>
      <View style={styles.bonus}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/sportmaster.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Спортмастер</Text>
          <Text style={styles.description}>Товары для спорта</Text>
        </View>
      </View>
      <View style={styles.bonus}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/ivrosche.png')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ив Роше</Text>
          <Text style={styles.description}>Парфюмерия и косметика</Text>
        </View>
        <View style={styles.lockContainer}>
          <View style={styles.lockControls}>
            <Image
              style={styles.lockImage}
              source={require('../../../assets/lock.png')}
            />
            <View style={styles.lockValue}>
              <Image
                source={require('../../../assets/key.png')}
                style={styles.keyIcon}
              />
              <Text>200</Text>
            </View>
          </View>
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
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 18,
    left: 20,
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
  },
  description: {
    color: '#B3B4B5',
    fontWeight: '400',
    fontSize: 12,
  },
  lockContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 16,
  },
  lockControls: {
    position: 'absolute',
    top: 17,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockImage: {
    width: 45,
    height: 53,
  },
  lockValue: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  keyIcon: {
    height: 16,
    width: 16,
  },
});
