import React from 'react';
import {CheckBox} from 'react-native-elements';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

export interface Task {
  isCompleted: boolean;
  task: string;
}

interface TasksListProps {
  tasks: Task[];
  onTaskClick?: (task: Task) => any;
  containerStyles?: StyleProp<ViewStyle>;
}

export const TasksList = (props: TasksListProps) => {
  return (
    <View style={props.containerStyles}>
      {props.tasks.map((task) => (
        <CheckBox
          key={task.task}
          title={task.task}
          checked={task.isCompleted}
          containerStyle={styles.checkbox}
          textStyle={styles.text}
          onPress={() => props.onTaskClick?.(task)}
          checkedColor="#024059"
          size={33}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    width: 290,
    margin: 0,
    padding: 0,
    marginBottom: 12,
  },
  text: {
    fontWeight: '400',
    fontSize: 18,
  },
});
