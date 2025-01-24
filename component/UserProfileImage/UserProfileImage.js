import React from 'react';
import PropTypes from 'prop-types';
import style from '../UserProfileImage/style';
import {Image, View} from 'react-native';

const UserProfileImage = props => (
  <View
    style={[style.userImageContainer, {borderRadius: props.imageDimensions}]}>
    <Image
      source={props.profileImage}
      style={{width: props.imageDimensions, height: props.imageDimensions}}
    />
  </View>
);
UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
