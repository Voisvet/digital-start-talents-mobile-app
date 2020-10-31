import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PhoneSignup} from '../PhoneSignup/PhoneSignup';
import {ProfOrientingTest} from '../ProfOrientingTest/ProfOrientingTest';
import {InterestsPicking} from '../InterestsPicking/InterestsPicking';
import {GoalEntering} from '../GoalEntering/GoalEntering';
import {TaskEntering} from '../TasksEntering/TaskEntering';

const Stack = createStackNavigator();

export const RegistrationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Signup'} component={PhoneSignup} />
        <Stack.Screen
          name={'ProfOrientingTest'}
          component={ProfOrientingTest}
        />
        <Stack.Screen name={'InterestsPicking'} component={InterestsPicking} />
        <Stack.Screen name={'GoalEntering'} component={GoalEntering} />
        <Stack.Screen name={'TaskEntering'} component={TaskEntering} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
