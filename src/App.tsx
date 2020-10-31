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
import {UserRoot} from './container/UserRoot/UserRoot';
import {RegistrationRoot} from './container/RegistrationRoot/RegistrationRoot';
import {observer} from 'mobx-react';
import {authStore} from './store/Auth.store';

declare const global: {HermesInternal: null | {}};

const App = observer(() => {
  return authStore.token ? <UserRoot /> : <RegistrationRoot />;
});

export default App;
