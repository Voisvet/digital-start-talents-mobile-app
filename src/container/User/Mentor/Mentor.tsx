import React, {useCallback, useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import FitImage from 'react-native-fit-image';
import axios from 'axios';
import {
  getMentorImageUrl,
  MENTOR_DONE_URL,
  MENTOR_LIKE_URL,
  MENTORS_URL,
} from '../../../store/urls';
import {InterestsList} from '../../../component/InterestsList';
import {profileStore} from '../../../store/Profile.store';
import {foxDialogStore} from '../../../store/FoxDialog.store';

interface Mentor {
  name: string;
  position: string;
  id: number;
  bio: string;
  photo: string;
  expertises: string[];
}

export const Mentor = observer(() => {
  const navigation = useNavigation();
  const swiperRef = useRef<Swiper<any>>(null);
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    axios.get<{mentors: Mentor[]}>(MENTORS_URL).then((response) => {
      setMentors(response.data.mentors);
    });
  }, []);

  const likeMentor = useCallback((mentor: Mentor) => {
    axios.post(
      MENTOR_LIKE_URL,
      {
        id: mentor.id,
      },
      {headers: {Authorization: `Bearer ${profileStore.token}`}},
    );
  }, []);

  return (
    <View style={styles.container}>
      {mentors.length ? (
        <Swiper
          ref={swiperRef}
          cards={mentors}
          renderCard={(card: Mentor) => {
            if (!card) {
              return null;
            }
            return (
              <View style={styles.card}>
                <View style={{height: '60%', width: '100%'}}>
                  <FitImage
                    source={{uri: getMentorImageUrl(card.photo)}}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.controls}>
                  <Text style={styles.name}>{card.name}</Text>
                  <Text style={styles.position}>{card.position}</Text>
                  <InterestsList
                    interests={['Test 1', 'Test 2', 'Test 3'].map((exp) => ({
                      interest: exp,
                      isSelected: false,
                    }))}
                  />
                  <View style={styles.buttons}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => swiperRef.current?.swipeLeft()}>
                      <Image
                        style={styles.buttonImage}
                        source={require('../../../assets/cross.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => swiperRef.current?.swipeRight()}>
                      <Image
                        style={styles.buttonImage}
                        source={require('../../../assets/heart.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          verticalSwipe={false}
          onSwipedRight={(cardIndex) => {
            if (mentors[cardIndex]) {
              likeMentor(mentors[cardIndex]);
            }
          }}
          onSwipedAll={() => {
            axios
              .post(
                MENTOR_DONE_URL,
                {},
                {headers: {Authorization: `Bearer ${profileStore.token}`}},
              )
              .then(() => {
                navigation.goBack();
                profileStore.setWaitingForMentor();
                foxDialogStore.openDialog(
                  'Заявка на прикрепление ментора отправлена, ответ не заставит себя ждать!',
                );
              });
          }}
          stackSize={3}
          cardIndex={0}
          backgroundColor="#ffffff"
        />
      ) : null}
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
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
  },
  position: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
  buttons: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginRight: 24,
    marginLeft: 24,
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
  controls: {
    backgroundColor: '#fff',
    padding: 32,
    alignItems: 'center',
  },
});
