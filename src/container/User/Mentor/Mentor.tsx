import React from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';

export const Mentor = observer(() => {
  const navigation = useNavigation();

  return <Text>Mentor</Text>;
});
