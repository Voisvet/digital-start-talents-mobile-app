import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {Button, Text, TextInput, View} from 'react-native';
import {registrationStore} from '../../../store/Registration.store';
import {useNavigation} from '@react-navigation/native';

export const GoalEntering = observer(() => {
  const navigation = useNavigation();
  const [goal, setGoal] = useState('');
  const submit = useCallback(() => {
    registrationStore.setGoal(goal);
    navigation.navigate('TaskEntering');
  }, [goal, navigation]);

  return (
    <View>
      <Text>Вход</Text>
      <TextInput
        placeholder="Task"
        onChangeText={(text) => setGoal(text)}
        defaultValue={goal}
      />
      <Button title={'Продолжить'} onPress={submit} />
    </View>
  );
});
