import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import {Image, ScrollView, View} from 'react-native';

const ProfileTabContent = () => {
  const items = Array.from({length: 10});
  return (
    <ScrollView
      style={style.profileTabContentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={style.profileTabContent}>
        {items.map((_, index) => (
          <Image
            key={index}
            resizeMode="contain"
            style={style.image}
            source={require('../../assets/images/default_post.png')}
          />
        ))}
      </View>
    </ScrollView>
  );
};

ProfileTabContent.propTypes = {};

export default ProfileTabContent;
