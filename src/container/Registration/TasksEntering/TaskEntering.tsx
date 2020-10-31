import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {Button, Text, TextInput, View} from 'react-native';
import {authStore} from '../../../store/Auth.store';

export const TaskEntering = observer(() => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = useCallback(() => {
    setTasks([...tasks, task]);
  }, [tasks, setTasks, task]);

  const submit = useCallback(() => {
    authStore.setToken('test');
  }, []);

  return (
    <View>
      <Text>Вход</Text>
      <TextInput
        placeholder="Goal"
        onChangeText={(text) => setTask(text)}
        defaultValue={task}
      />
      {tasks.map((aTask) => (
        <Text>{aTask}</Text>
      ))}
      <Button title={'Добавить'} onPress={addTask} />
      <Button title={'Продолжить'} onPress={submit} />
    </View>
  );
});
