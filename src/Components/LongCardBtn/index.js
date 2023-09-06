import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ImageContainer from '../ImageContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../style/colors';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';

const LongCardBtn = ({
  title,
  message,
  rightItem = true,
  onPress,
  rightIcon = false,
  image,
  imageWidth = 35,
  imageHeight = 35,
  tintColor = null,
  imageBorderWidth = null,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.content}>
        <ImageContainer
          image={imagePath.user}
          width={60}
          height={60}
          tintColor={colors.blackOpacity25}
          borderRadius={30}
          style={{
            borderWidth: imageBorderWidth,
            borderColor: colors.theme,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{message}</Text>
        </View>
      </View>
      <View style={styles.rightItemContainer}>
        {rightIcon && (
          <TouchableOpacity>
            <ImageContainer
              image={image}
              width={imageWidth}
              height={imageHeight}
              tintColor={tintColor}
            />
          </TouchableOpacity>
        )}
        {!rightIcon && rightItem && (
          <Text style={styles.subtitle}>12/12/12</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(8),
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  textContainer: {},
  rightItemContainer: {},
  title: {
    fontSize: moderateScale(17),
    fontWeight: '500',
    lineHeight: verticalScale(28),
    color: colors.blackOpacity70,
  },
  subtitle: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: verticalScale(28),
    color: colors.blackOpacity50,
  },
});

export default LongCardBtn;
