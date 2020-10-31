import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {authStore} from '../../../store/Auth.store';
import {CheckBox, Image, Input, Text} from 'react-native-elements';
import {Button} from '../../../component/Button';
import { Task, TasksList } from '../../../component/TasksList';

export const TaskEntering = observer(() => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback(() => {
    setTasks([
      ...tasks,
      {
        task,
        isCompleted: false,
      },
    ]);
  }, [tasks, setTasks, task]);

  const submit = useCallback(() => {
    authStore.setToken('test');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <Text h2 h2Style={styles.title}>
          Распиши задачи
        </Text>
        <Input
          containerStyle={styles.input}
          placeholder={'Добавить задачу...'}
          onChangeText={(text) => setTask(text)}
          onEndEditing={() => addTask()}
          defaultValue={task}
        />
        <TasksList tasks={tasks} />
        <Button
          containerStyle={styles.button}
          title={'Далее'}
          onPress={submit}
        />
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
    marginBottom: 16,
  },
});
