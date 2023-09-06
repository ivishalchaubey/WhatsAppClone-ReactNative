import React from 'react';
import navigationString from '../constants/navigationString';
import TopTabNavigator from './TopTabNavigator';
import ChatMain from '../pages/Chat/ChatMain';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen
        name={navigationString.TAB_NAVIGATOR}
        component={TopTabNavigator}
      />
      <Stack.Screen name={navigationString.CHAT_MAIN} component={ChatMain} />
    </>
  );
};

export default MainStack;
