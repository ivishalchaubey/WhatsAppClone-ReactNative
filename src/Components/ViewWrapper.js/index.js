import React from 'react';
import {View} from 'react-native';
import colors from '../../style/colors';

const ViewWrapper = ({children}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>{children}</View>
  );
};

export default ViewWrapper;
