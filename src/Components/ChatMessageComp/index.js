import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import ImageContainer from '../ImageContainer';
import iconsPath from '../../constants/iconsPath';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import colors from '../../style/colors';

const ChatMessageComp = () => {
  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.container}>
        <ImageContainer
          image={iconsPath.emojiIcon}
          width={25}
          height={25}
          tintColor={colors.blackOpacity50}
        />
        <TextInput placeholder="Message" style={styles.inputField} />
        <ImageContainer
          image={iconsPath.linkIcon}
          width={25}
          height={25}
          tintColor={colors.blackOpacity50}
        />
        <ImageContainer
          image={iconsPath.cameraIcon}
          width={25}
          height={25}
          tintColor={colors.blackOpacity50}
        />
      </View>
      <TouchableOpacity style={styles.imageButton}>
        <ImageContainer
          image={iconsPath.micIcon}
          width={25}
          height={25}
          tintColor={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperContainer: {
    paddingHorizontal: scale(7),
    paddingVertical: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: scale(12),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(2),
    backgroundColor: colors.white,
    elevation: 2,
    zIndex: 1,
    borderWidth: 0.5,
    borderRadius: moderateScale(32),
    borderColor: colors.blackOpacity25,
    gap: scale(9),
    paddingEnd: scale(17),
    flex: 1,
  },
  inputField: {
    flex: 1,
  },
  imageButton: {
    backgroundColor: colors.theme,
    padding: moderateScale(8),
    borderRadius: moderateScale(12),
  },
});
export default ChatMessageComp;
