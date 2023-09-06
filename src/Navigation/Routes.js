import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const [isLogin, setIsLogin] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogin ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
