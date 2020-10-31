import React, {useCallback, useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {registrationStore} from '../../../store/Registration.store';
import {useNavigation} from '@react-navigation/native';
import {Tag} from '../../../component/Tag';
import {Image, Text} from 'react-native-elements';
import {Button} from '../../../component/Button';
import {SearchInput} from '../../../component/SearchInput';
import {InterestsList} from '../../../component/InterestsList';

export const InterestsPicking = observer(() => {
  const navigation = useNavigation();
  const [interests, setInterests] = useState<string[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');

  useEffect(() => {
    registrationStore.loadInterestsHints('test');
  }, []);

  const toggleInterest = useCallback(
    (interest: string) => {
      if (interests.includes(interest)) {
        setInterests(interests.filter((val) => val !== interest));
      } else {
        setInterests([...interests, interest]);
      }
    },
    [setInterests, interests],
  );

  const submit = useCallback(() => {
    registrationStore.setInterests(interests);
    navigation.navigate('GoalEntering');
  }, [interests, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <Text h2 h2Style={styles.title}>
          Выбери свои интересы
        </Text>
        <SearchInput
          containerStyles={styles.searchInput}
          placeholder={'Поиск'}
          onChangeText={(text) => setSearchRequest(text)}
          defaultValue={searchRequest}
        />
        <InterestsList
          containerStyles={styles.tagsContainer}
          interests={registrationStore.interestsHints.map((int) => ({
            interest: int,
            isSelected: interests.includes(int),
          }))}
          onInterestSelect={(interest) => toggleInterest(interest.interest)}
        />
        <Button title={'Далее'} onPress={submit} />
      </View>
      <Image
        source={require('../../../assets/fox-face.png')}
        containerStyle={styles.image}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  controlsContainer: {
    alignItems: 'center',
  },
  image: {
    marginBottom: 40,
    height: 152,
    width: 209,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 16,
    marginBottom: 32,
  },
  tagsContainer: {
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 32,
  },
  tag: {
    marginRight: 8,
    marginLeft: 8,
    marginTop: 6,
    marginBottom: 6,
  },
  searchInput: {
    marginBottom: 36,
  },
});
