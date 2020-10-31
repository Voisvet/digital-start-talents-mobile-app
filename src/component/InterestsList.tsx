import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Tag} from './Tag';

export interface Interest {
  interest: string;
  isSelected: boolean;
}

interface InterestsListProps {
  interests: Interest[];
  containerStyles?: StyleProp<ViewStyle>;
  onInterestSelect?: (interest: Interest) => any;
}

export const InterestsList = (props: InterestsListProps) => {
  return (
    <View
      style={
        props.containerStyles
          ? [styles.container, props.containerStyles]
          : styles.container
      }>
      {props.interests.map((interest) => (
        <View style={styles.tag} key={interest.interest}>
          <Tag
            title={interest.interest}
            onPress={() => props.onInterestSelect?.(interest)}
            isActive={interest.isSelected}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  tag: {
    marginRight: 8,
    marginLeft: 8,
    marginTop: 6,
    marginBottom: 6,
  },
});
