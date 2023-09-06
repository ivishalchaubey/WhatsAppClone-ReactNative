import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../style/colors';
import ImageContainer from '../ImageContainer';
import iconsPath from '../../constants/iconsPath';
import imagePath from '../../constants/imagePath';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const ChatHeaderComp = ({title}) => {
  const navigation = useNavigation();
  const truncatedTitle =
    title.length > 19 ? `${title.substring(0, 19)}...` : title;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.leftContainer}>
          <ImageContainer
            image={iconsPath.backArrowIcon}
            width={30}
            height={30}
            tintColor={colors.white}
          />
          <ImageContainer
            image={imagePath.user}
            width={40}
            height={40}
            tintColor={colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{truncatedTitle}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <HeaderButton image={iconsPath.videoCallIcon} size={30} />
        <HeaderButton image={iconsPath.callIcon} size={25} />
        <HeaderButton image={iconsPath.menuIcon} size={30} />
      </View>
    </View>
  );
};

const HeaderButton = ({image, size}) => (
  <TouchableOpacity>
    <ImageContainer
      image={image}
      width={size}
      height={size}
      tintColor={colors.white}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme,
    paddingVertical: verticalScale(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(17),
    fontWeight: '600',
    color: colors.white,
    marginLeft: scale(7),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: scale(7),
    gap: scale(12),
  },
});

export default ChatHeaderComp;
