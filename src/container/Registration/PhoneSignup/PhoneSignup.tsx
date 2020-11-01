import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {Image, Input} from 'react-native-elements';
import {registrationStore} from '../../../store/Registration.store';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../component/Button';
import axios from 'axios';
import {LOGIN_URL} from '../../../store/urls';
import {profileStore} from '../../../store/Profile.store';

export const PhoneSignup = observer(() => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const submit = useCallback(() => {
    axios
      .post<{token: string; register: boolean}>(LOGIN_URL, {
        phone_number: phone,
        account_id: code,
      })
      .then((response) => {
        if (response.data.register) {
          registrationStore.setAuthData(response.data.token);
          navigation.navigate('ProfOrientingTest');
        } else {
          profileStore.setToken(response.data.token);
        }
      });
  }, [phone, code, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/title.png')}
        containerStyle={styles.title}
      />
      <Image
        source={require('../../../assets/fox_login.png')}
        containerStyle={styles.image}
      />
      <Input
        containerStyle={styles.input}
        placeholder={'+79999999999'}
        label={'Номер телефона'}
        onChangeText={(text) => setPhone(text)}
        defaultValue={phone}
        keyboardType={'phone-pad'}
      />
      <Input
        containerStyle={styles.input}
        placeholder={'********'}
        label={'ID'}
        onChangeText={(text) => setCode(text)}
        defaultValue={code}
        keyboardType={'number-pad'}
      />
      <Button
        title={'Войти'}
        onPress={submit}
        containerStyle={styles.buttonContainerStyle}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  title: {
    width: 135,
    height: 120,
    marginTop: 50,
  },
  image: {
    marginTop: 36,
    marginBottom: 38,
    height: 154,
    width: 171,
  },
  input: {
    width: 250,
  },
  buttonContainerStyle: {
    marginTop: 12,
  },
});
