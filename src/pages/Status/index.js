import {View, FlatList} from 'react-native';
import React from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import LongCardBtn from '../../Components/LongCardBtn/index.js';
import {verticalScale, scale} from 'react-native-size-matters';
import HeadingText from '../../Components/HeadingText/index.js';

const Status = () => {
  const data = [
    {
      id: 1,
      title: 'ITdude',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
    },
    {
      id: 2,
      title: 'Dishu',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
    },
    {
      id: 3,
      title: 'Vishal Chaturvedi',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
    },
    {
      id: 4,
      title: 'Vishu',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
    },
    {
      id: 5,
      title: 'Vishu Chaturvedi',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
    },
    {
      id: 6,
      title: 'Vishu Chaturvedi',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
    },
  ];
  return (
    <ViewWrapper>
      <View style={{flex: 1}}>
        <View style={{paddingVertical: verticalScale(12)}}>
          <LongCardBtn
            title={'My Status'}
            message={'Tab to add status updates...'}
            onPress={() => console.log('clicked')}
            rightItem={false}
          />
          <View
            style={{
              paddingTop: verticalScale(10),
              paddingHorizontal: scale(17),
            }}>
            <HeadingText text="Recent updates" />
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <LongCardBtn
              title={item.title}
              message={item.message}
              onPress={item.onPress}
              rightItem={false}
              imageBorderWidth={3}
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
export default Status;
