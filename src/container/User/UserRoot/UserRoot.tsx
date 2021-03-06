import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
                    style={styles.icon}
                    source={
                      props.focused
                        ? require('../../../assets/profile_focused.png')
                        : require('../../../assets/profile.png')
                    }
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
                  <Image
                    style={styles.icon}
                    source={
                      props.focused
                        ? require('../../../assets/possibility_focused.png')
                        : require('../../../assets/possibility.png')
                    }
                  />
                ),
              }}
            />
            <Tab.Screen
              name={'Bonuses'}
              component={Bonuses}
              options={{
                title: 'Бонусы',
                tabBarIcon: (props) => (
                  <Image
                    style={styles.icon}
                    source={
                      props.focused
                        ? require('../../../assets/bonus_focused.png')
                        : require('../../../assets/bonus.png')
                    }
                  />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      />
      <Stack.Screen
        name={'Mentor'}
        component={Mentor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'BonusDetails'}
        component={BonusDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'PossibilityDetails'}
        component={PossibilityDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
});
