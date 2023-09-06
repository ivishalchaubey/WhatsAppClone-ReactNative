import {View, Text, FlatList} from 'react-native';
import React from 'react';
import LongCardBtn from '../../Components/LongCardBtn';
import {verticalScale, scale} from 'react-native-size-matters';
import ViewWrapper from '../../Components/ViewWrapper.js';
import HeadingText from '../../Components/HeadingText';
import iconsPath from '../../constants/iconsPath';
import colors from '../../style/colors';

const Calls = () => {
  const data = [
    {
      id: 1,
      title: 'ITdude',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
      image: iconsPath.callIcon,
    },
    {
      id: 2,
      title: 'Vishu',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
      image: iconsPath.videoCallIcon,
    },
    {
      id: 3,
      title: 'Dishu',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
      image: iconsPath.callIcon,
    },
    {
      id: 4,
      title: 'Vishu Chaturvedi',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
      image: iconsPath.callIcon,
    },
    {
      id: 5,
      title: 'opt4code',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
      image: iconsPath.callIcon,
    },
    {
      id: 6,
      title: 'Vishu Chaturvedi',
      message: 'Yesterday, 22:32',
      onPress: () => console.log('Clicked'),
      image: iconsPath.videoCallIcon,
    },
  ];
  return (
    <ViewWrapper>
      <View style={{flex: 1}}>
        <View style={{paddingVertical: verticalScale(12)}}>
          <LongCardBtn
            title={'Create call link'}
            message={'Share a link for your Whatsapp call'}
            onPress={() => console.log('clicked')}
            rightItem={false}
          />
          <View
            style={{
              paddingTop: verticalScale(10),
              paddingHorizontal: scale(17),
            }}>
            <HeadingText text="Recent" />
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
              rightIcon={true}
              image={item.image}
              imageWidth={25}
              imageHeight={25}
              tintColor={colors.theme}
            />
          )}
          contentContainerStyle={{
            paddingVertical: verticalScale(12),
            paddingRight: scale(12),
            gap: verticalScale(14),
          }}
        />
      </View>
    </ViewWrapper>
  );
};

export default Calls;
