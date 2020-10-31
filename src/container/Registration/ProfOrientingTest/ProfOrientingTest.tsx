import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ProfOrientingTest = () => {
  const navigation = useNavigation();

  const submit = useCallback(() => {
    navigation.navigate('InterestsPicking');
  }, [navigation]);

  return (
    <View>
      <Text>Тут будет вебвью с тестом</Text>
      <Button title={'Идём дальше'} onPress={submit} />
    </View>
  );
};
