import React from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {UserInfo} from '../../../component/UserInfo';
import {Button} from '../../../component/Button';
import {GoalInfo} from '../../../component/GoalInfo';
import {TasksList} from '../../../component/TasksList';
import {InterestsList} from '../../../component/InterestsList';
import {MentorshipStatus, profileStore} from '../../../store/Profile.store';
import {foxDialogStore} from '../../../store/FoxDialog.store';

export const Profile = observer(() => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <UserInfo
        name={profileStore.name}
        avatar={require('../../../assets/avatar_example.png')}
        experience={profileStore.points}
      />
      <Button
        title={'Написать эксперту'}
        containerStyle={styles.expertButtonContainer}
        onPress={() => {
          if (profileStore.mentorship === MentorshipStatus.not_enough_points) {
            foxDialogStore.openDialog(
              'Ты ещё недостаточно опытен, собери больше ключей!',
            );
          } else if (profileStore.mentorship === MentorshipStatus.waiting) {
            foxDialogStore.openDialog('Твоя заявка всё ещё обрабатывается.');
          } else {
            navigation.navigate('Mentor');
          }
        }}
      />
      <GoalInfo
        goal={profileStore.goal}
        tasksAmount={profileStore.tasks.length}
        tasksCompleted={profileStore.tasks.filter((task) => task.done).length}
        containerStyles={styles.goal}
      />
      <TasksList
        containerStyles={styles.tasks}
        tasks={profileStore.tasks}
        onTaskClick={(task) =>
          profileStore.updateTask({...task, done: !task.done})
        }
      />
      <Text h3 h3Style={styles.interestsTitle}>
        Интересы
      </Text>
      <InterestsList
        interests={profileStore.interests.map((val) => ({
          interest: val,
          isSelected: false,
        }))}
        containerStyles={styles.interests}
      />
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
