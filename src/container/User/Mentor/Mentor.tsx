import React, {useRef} from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Button} from '../../../component/Button';

export const Mentor = observer(() => {
  const navigation = useNavigation();
  const swiperRef = useRef<Swiper<any>>(null);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
              <Button
                title="Left"
                onPress={() => swiperRef.current?.swipeLeft()}
              />
              <Button
                title="Right"
                onPress={() => swiperRef.current?.swipeRight()}
              />
            </View>
          );
        }}
        verticalSwipe={false}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        stackSize={3}
        backgroundColor="#ffffff"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
