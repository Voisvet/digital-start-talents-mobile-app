import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {Button, Text, TextInput, View} from 'react-native';
import {registrationStore} from '../../../store/Registration.store';
import {useNavigation} from '@react-navigation/native';

export const PhoneSignup = observer(() => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const submit = useCallback(() => {
    registrationStore.setAuthData(phone, code);
    navigation.navigate('ProfOrientingTest');
  }, [phone, code, navigation]);

  return (
    <View>
      <Text>Вход</Text>
      <TextInput
        placeholder="Phone"
        onChangeText={(text) => setPhone(text)}
        defaultValue={phone}
      />
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={(text) => setCode(text)}
        defaultValue={code}
      />
      <Button title={'Войти'} onPress={submit} />
    </View>
  );
});
