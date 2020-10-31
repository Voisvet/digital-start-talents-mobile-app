import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {Button, Text, TextInput, View} from 'react-native';
import {registrationStore} from '../../store/Registration.store';
import {StackNavigationProp} from '@react-navigation/stack';

export const GoalEntering = observer(
  ({navigation}: {navigation: StackNavigationProp<any>}) => {
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
  },
);
