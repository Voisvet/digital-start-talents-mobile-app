import React, {useCallback, useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {registrationStore} from '../../../store/Registration.store';
import {useNavigation} from '@react-navigation/native';
import {Image, Text} from 'react-native-elements';
import {Button} from '../../../component/Button';
import {SearchInput} from '../../../component/SearchInput';
import {Interest, InterestsList} from '../../../component/InterestsList';
import axios from 'axios';
import {TAGS_URL} from '../../../store/urls';

const getInterests = (
  listedInterests: string[],
  selectedInterests: string[],
): Interest[] => {
  const ignoreList: string[] = [];
  const interests: Interest[] = listedInterests.map((interest) => {
    const isSelected = selectedInterests.includes(interest);
    if (isSelected) {
      ignoreList.push(interest);
    }
    return {interest, isSelected};
  });
  selectedInterests
    .filter((int) => !ignoreList.includes(int))
    .forEach((interest) => interests.push({interest, isSelected: true}));
  return interests;
};

export const InterestsPicking = observer(() => {
  const navigation = useNavigation();
  const [interests, setInterests] = useState<string[]>([]);
  const [searchRequest, setSearchRequest] = useState<string>('');

  useEffect(() => {
    registrationStore.loadInterestsHints('');
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

  const searchInterests = useCallback(
    (interest: string) => {
      setSearchRequest(interest);
      registrationStore.loadInterestsHints(interest);
    },
    [setSearchRequest],
  );

  const saveInterest = useCallback(() => {
    if (!registrationStore.interestsHints.length) {
      axios
        .post(TAGS_URL, {tag: searchRequest})
        .then(() => toggleInterest(searchRequest));
    }
  }, [searchRequest, toggleInterest, registrationStore.interestsHints]);

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
          onChangeText={(text) => searchInterests(text)}
          onEndEditing={() => saveInterest()}
          defaultValue={searchRequest}
        />
        <InterestsList
          containerStyles={styles.tagsContainer}
          interests={getInterests(registrationStore.interestsHints, interests)}
          onInterestSelect={(interest) => toggleInterest(interest.interest)}
        />
        <Button title={'Далее'} onPress={submit} />
      </View>
      <Image
        source={require('../../../assets/fox_book.png')}
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
    height: 221,
    width: 239,
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
