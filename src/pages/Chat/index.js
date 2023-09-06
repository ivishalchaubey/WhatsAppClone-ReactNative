import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import LongCardBtn from '../../Components/LongCardBtn';
import {verticalScale} from 'react-native-size-matters';
import navigationString from '../../constants/navigationString.js';
import {useNavigation} from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: 'ITdude',
      message: 'Hi Dude',
    },
    {
      id: 2,
      title: 'Dishu',
      message: 'Hello',
    },
    {
      id: 3,
      title: 'Vishal Chaturvedi',
      message: 'Hi Dude',
    },
    {
      id: 4,
      title: 'opt4code',
      message: 'Hi Dude',
    },
    {
      id: 5,
      title: 'Vishu Chaturvedi',
      message: 'Hi Dude',
    },
    {
      id: 6,
      title: 'Team ITdude',
      message: 'Hi Dude',
    },
  ];
  return (
    <ViewWrapper>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <LongCardBtn
              title={item.title}
              message={item.message}
              onPress={() =>
                navigation.navigate(navigationString.CHAT_MAIN, {
                  title: item.title,
                })
              }
            />
          )}
          contentContainerStyle={{
            paddingVertical: verticalScale(12),
            gap: verticalScale(14),
          }}
        />
      </View>
    </ViewWrapper>
  );
};

export default Chat;
