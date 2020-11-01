import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {registrationStore} from '../../../store/Registration.store';
import {useNavigation} from '@react-navigation/native';
import {Image, Input, Text} from 'react-native-elements';
import {Button} from '../../../component/Button';

export const GoalEntering = observer(() => {
  const navigation = useNavigation();
  const [goal, setGoal] = useState('');
  const submit = useCallback(() => {
    registrationStore.setGoal(goal);
    navigation.navigate('TaskEntering');
  }, [goal, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <Text h2 h2Style={styles.title}>
          Поставь цель
        </Text>
        <Input
          containerStyle={styles.input}
          placeholder={'Добавить цель...'}
          onChangeText={(text) => setGoal(text)}
          defaultValue={goal}
          multiline={true}
        />
        <Button
          containerStyle={styles.button}
          title={'Далее'}
          onPress={submit}
        />
      </View>
      <Image
        source={require('../../../assets/fox_goal.png')}
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
    height: 300,
    width: 222,
  },
  button: {
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 16,
    marginBottom: 32,
  },
  input: {
    width: 250,
  },
});
