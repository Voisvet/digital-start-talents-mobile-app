import React, {useCallback, useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {Button, Text, View} from 'react-native';
import {registrationStore} from '../../store/Registration.store';
import {StackNavigationProp} from '@react-navigation/stack';

export const InterestsPicking = observer(
  ({navigation}: {navigation: StackNavigationProp<any>}) => {
    const [interests, setInterests] = useState<string[]>([]);

    useEffect(() => {
      registrationStore.loadInterestsHints('test');
    }, []);

    const addInterest = useCallback(
      (interest: string) => {
        setInterests([...interests, interest]);
      },
      [setInterests, interests],
    );

    const submit = useCallback(() => {
      registrationStore.setInterests(interests);
      navigation.navigate('GoalEntering');
    }, [interests, navigation]);

    return (
      <View>
        <Text>Вход</Text>
        {registrationStore.interestsHints.map((hint) => (
          <Button key={hint} title={hint} onPress={() => addInterest(hint)} />
        ))}
        {interests.map((interest) => (
          <Text>{interest}</Text>
        ))}
        <Button title={'Далее'} onPress={submit} />
      </View>
    );
  },
);
