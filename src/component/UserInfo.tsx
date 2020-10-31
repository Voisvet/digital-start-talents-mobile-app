import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

interface UserInfoProps {
  name: string;
  avatar: ImageSourcePropType;
  experience: number;
}

export const UserInfo = (props: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <Image source={props.avatar} style={styles.avatar} />
      <Text h3 h3Style={styles.name}>
        {props.name}
      </Text>
      <View style={experienceStyles.container}>
        <Text style={experienceStyles.value}>{props.experience}</Text>
        <Image
          source={require('../assets/key.png')}
          style={experienceStyles.keyIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#024059',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 100,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '400',
    color: '#ffffff',
    width: 100,
    textAlign: 'center',
  },
});

const experienceStyles = StyleSheet.create({
  container: {
    height: 36,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 17,
    alignItems: 'center',
    position: 'absolute',
    right: 14,
    top: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  keyIcon: {
    height: 29,
    width: 29,
  },
  value: {
    fontWeight: '400',
    fontSize: 18,
    marginRight: 4,
  },
});
