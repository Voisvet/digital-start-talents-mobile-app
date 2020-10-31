import React from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';

export const Profile = observer(() => {
  const navigation = useNavigation();

  return (
    <View style={{flexGrow: 1, backgroundColor: '#FFFFFF'}}>
      <Text>Profile</Text>
    </View>
  );
});
