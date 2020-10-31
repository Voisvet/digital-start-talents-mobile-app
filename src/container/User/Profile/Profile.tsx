import React from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {UserInfo} from '../../../component/UserInfo';
import {Button} from '../../../component/Button';
import {GoalInfo} from '../../../component/GoalInfo';
import {TasksList} from '../../../component/TasksList';
import {InterestsList} from '../../../component/InterestsList';

export const Profile = observer(() => {
  const navigation = useNavigation();
  const tasks = [
    {
      task: 'Записаться к репетиторам',
      isCompleted: true,
    },
    {
      task: 'Решить пробники',
      isCompleted: false,
    },
    {
      task: 'Сдать ЕГЭ',
      isCompleted: false,
    },
    {
      task: 'Подать документы',
      isCompleted: false,
    },
  ];

  const interests = [
    {
      interest: 'Математика',
      isSelected: false,
    },
    {
      interest: 'Информатика',
      isSelected: false,
    },
    {
      interest: 'Физика',
      isSelected: false,
    },
    {
      interest: 'Наука',
      isSelected: false,
    },
    {
      interest: 'Олимпиады',
      isSelected: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <UserInfo
        name={'Мария Иванова'}
        avatar={require('../../../assets/avatar_example.png')}
        experience={150}
      />
      <Button
        title={'Написать эксперту'}
        containerStyle={styles.expertButtonContainer}
      />
      <GoalInfo
        goal={'Поступить в МФТИ'}
        tasksAmount={4}
        tasksCompleted={1}
        containerStyles={styles.goal}
      />
      <TasksList containerStyles={styles.tasks} tasks={tasks} />
      <Text h3 h3Style={styles.interestsTitle}>
        Интересы
      </Text>
      <InterestsList interests={interests} containerStyles={styles.interests} />
    </ScrollView>
  );
});

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  expertButtonContainer: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 24,
  },
  goal: {
    marginRight: 16,
    marginLeft: 16,
  },
  tasks: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 16,
  },
  interests: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 16,
    marginBottom: 88,
  },
  interestsTitle: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 24,
    color: '#024059',
  },
});
