import {View, Text} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import colors from '../../style/colors';

const HeadingText = ({
  text,
  fontSize = 15,
  fontWeight = '600',
  color = colors.blackOpacity40,
}) => {
  return (
    <Text
      style={{
        fontSize: moderateScale(fontSize),
        fontWeight: fontWeight,
        color: color,
      }}>
      {text}
    </Text>
  );
};

export default HeadingText;
