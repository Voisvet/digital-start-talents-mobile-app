import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../component/Button';
import WebView from 'react-native-webview';

export const ProfOrientingTest = () => {
  const navigation = useNavigation();

  const submit = useCallback(() => {
    navigation.navigate('InterestsPicking');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{uri: 'https://profilum.ru/test-na-professiyu'}}
      />
      <Button
        title={'Идём дальше'}
        onPress={submit}
        containerStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  webView: {
    flexGrow: 1,
  },
  button: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
  },
});
