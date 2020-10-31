/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {UserRoot} from './container/User/UserRoot/UserRoot';
import {RegistrationRoot} from './container/Registration/RegistrationRoot/RegistrationRoot';
import {observer} from 'mobx-react';
import {profileStore} from './store/Profile.store';
import {NavigationContainer} from '@react-navigation/native';

declare const global: {HermesInternal: null | {}};

const App = observer(() => {
  return (
    <NavigationContainer>
      {profileStore.token ? <UserRoot /> : <RegistrationRoot />}
    </NavigationContainer>
  );
});

export default App;
