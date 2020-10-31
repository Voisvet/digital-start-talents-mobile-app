import React from 'react';
import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-elements';

interface GoalInfoProps {
  goal: string;
  tasksAmount: number;
  tasksCompleted: number;
  containerStyles?: StyleProp<ViewStyle>;
}

export const GoalInfo = (props: GoalInfoProps) => {
  return (
    <View
      style={
        props.containerStyles
          ? [styles.container, props.containerStyles]
          : styles.container
      }>
      <Image
        source={require('../assets/progress_example.png')}
        style={styles.progressDiagram}
      />
      <Text style={styles.goal}>{props.goal}</Text>
      <Text style={styles.progressFraction}>
        {props.tasksCompleted}/{props.tasksAmount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 18,
    backgroundColor: '#A8D5F2',
    borderRadius: 16,
    alignItems: 'center',
  },
  progressDiagram: {
    height: 70,
    width: 70,
    marginRight: 24,
  },
  goal: {
    fontWeight: '400',
    fontSize: 24,
    color: '#024059',
  },
  progressFraction: {
    fontWeight: '400',
    fontSize: 18,
    color: '#024059',
    position: 'absolute',
    bottom: 12,
    right: 16,
  },
});
