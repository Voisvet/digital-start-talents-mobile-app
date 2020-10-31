import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile} from '../Profile/Profile';
import {Bonuses} from '../Bonuses/Bonuses';
import {Possibilities} from '../Possibilities/Possibilities';
import {Mentor} from '../Mentor/Mentor';
import {BonusDetails} from '../BonusDetails/BonusDetails';
import {PossibilityDetails} from '../PossibilityDetails/PossibilityDetails';
import {TabBar} from '../../../component/TabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const UserRoot = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Root'}
        options={{headerShown: false}}
        component={() => (
          <Tab.Navigator tabBar={TabBar}>
            <Tab.Screen
              name={'Profile'}
              component={Profile}
              options={{
                title: 'Главная',
                tabBarIcon: (props) => (
                  <Image
                    source={require('../../../assets/profile_focused.png')}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={'Possibilities'}
              component={Possibilities}
              options={{
                title: 'Возможности',
                tabBarIcon: (props) => (
                  <Image source={require('../../../assets/possibility.png')} />
                ),
              }}
            />
            <Tab.Screen
              name={'Bonuses'}
              component={Bonuses}
              options={{
                title: 'Бонусы',
                tabBarIcon: (props) => (
                  <Image source={require('../../../assets/bonus.png')} />
                ),
              }}
            />
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
