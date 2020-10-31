import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile} from '../Profile/Profile';
import {Bonuses} from '../Bonuses/Bonuses';
import {Possibilities} from '../Possibilities/Possibilities';
import {Mentor} from '../Mentor/Mentor';
import {BonusDetails} from '../BonusDetails/BonusDetails';
import {PossibilityDetails} from '../PossibilityDetails/PossibilityDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const UserRoot = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Root'}
        component={() => (
          <Tab.Navigator>
            <Tab.Screen name={'Profile'} component={Profile} />
            <Tab.Screen name={'Bonuses'} component={Bonuses} />
            <Tab.Screen name={'Possibilities'} component={Possibilities} />
          </Tab.Navigator>
        )}
      />
      <Stack.Screen name={'Mentor'} component={Mentor} />
      <Stack.Screen name={'BonusDetails'} component={BonusDetails} />
      <Stack.Screen
        name={'PossibilityDetails'}
        component={PossibilityDetails}
      />
    </Stack.Navigator>
  );
};
