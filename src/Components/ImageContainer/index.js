import {View, Text, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const ImageContainer = ({
  image,
  width,
  height,
  borderRadius = 0,
  tintColor = null,
  style,
}) => {
  return (
    <Image
      source={image}
      style={{
        width: moderateScale(width),
        height: moderateScale(height),
        borderRadius: moderateScale(borderRadius),
        tintColor: tintColor,
        ...style,
      }}
    />
  );
};

export default ImageContainer;
