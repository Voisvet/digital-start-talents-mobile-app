import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {Image, Input, Text} from 'react-native-elements';
import {registrationStore} from '../../../store/Registration.store';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../component/Button';

export const PhoneSignup = observer(() => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const submit = useCallback(() => {
    registrationStore.setAuthData(phone, code);
    navigation.navigate('ProfOrientingTest');
  }, [phone, code, navigation]);

  return (
    <View style={styles.container}>
      <Text h1 h1Style={styles.title}>
        Талантливая молодёжь Тюменской области
      </Text>
      <Image
        source={require('../../../assets/fox-face.png')}
        containerStyle={styles.image}
      />
      <Input
        containerStyle={styles.input}
        placeholder={'+79999999999'}
        label={'Номер телефона'}
        onChangeText={(text) => setPhone(text)}
        defaultValue={phone}
      />
      <Input
        containerStyle={styles.input}
        placeholder={'********'}
        label={'ID'}
        onChangeText={(text) => setCode(text)}
        defaultValue={code}
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
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '400',
    width: 240,
  },
  image: {
    marginTop: 36,
    marginBottom: 30,
    height: 152,
    width: 209,
  },
  input: {
    width: 250,
  },
  buttonContainerStyle: {
    marginTop: 12,
  },
});
