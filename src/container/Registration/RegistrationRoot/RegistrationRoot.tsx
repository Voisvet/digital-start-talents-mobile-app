import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhoneSignup} from '../PhoneSignup/PhoneSignup';
import {ProfOrientingTest} from '../ProfOrientingTest/ProfOrientingTest';
import {InterestsPicking} from '../InterestsPicking/InterestsPicking';
import {GoalEntering} from '../GoalEntering/GoalEntering';
import {TaskEntering} from '../TasksEntering/TaskEntering';

const Stack = createStackNavigator();

export const RegistrationRoot = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Signup'}
        component={PhoneSignup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ProfOrientingTest'}
        component={ProfOrientingTest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'InterestsPicking'}
        component={InterestsPicking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'GoalEntering'}
        component={GoalEntering}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'TaskEntering'}
        component={TaskEntering}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
