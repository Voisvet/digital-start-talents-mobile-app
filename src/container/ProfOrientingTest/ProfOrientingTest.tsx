import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export const ProfOrientingTest = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
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
