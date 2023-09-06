import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ViewWrapper from '../../Components/ViewWrapper.js';
import ChatHeaderComp from '../../Components/ChatHeaderComp/index.js';
import ChatMessageComp from '../../Components/ChatMessageComp/index.js';
import colors from '../../style/colors.js';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const ChatMain = ({route}) => {
  const {title} = route.params;
  return (
    <ViewWrapper>
      <View style={styles.container}>
        <ChatHeaderComp title={title} />
        <View style={styles.messageContainer}>
          <MessageBox Msgfrom={true} message="Hello" />
          <MessageBox Msgfrom={false} message="Hi" />
          <MessageBox Msgfrom={true} message="You Like this video ?" />
          <MessageBox Msgfrom={false} message="Its very helpful" />
        </View>
        <ChatMessageComp />
      </View>
    </ViewWrapper>
  );
};

const MessageBox = ({Msgfrom, message, time = '11:12'}) => {
  console.log(Msgfrom);
  const alignItems = Msgfrom ? 'flex-end' : 'flex-start';
  const messageBoxStyle = Msgfrom
    ? {
        backgroundColor: colors.themekOpacity40,
        borderTopLeftRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(10),
        borderBottomRightRadius: moderateScale(15),
      }
    : {
        backgroundColor: colors.white,
        borderTopRightRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(15),
        borderBottomRightRadius: moderateScale(10),
        elevation: 3,
      };

  console.log(messageBoxStyle);

  return (
    <View
      style={{
        alignItems: alignItems,
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(5),
      }}>
      <TouchableOpacity style={{...styles.messageBox, ...messageBoxStyle}}>
        <Text style={styles.messageText}>{message}</Text>
        <Text
          style={{
            ...styles.messageText,
            fontSize: moderateScale(10),
            alignItems: 'flex-end',
          }}>
          {time}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageContainer: {
    flex: 1,
  },
  messageBox: {
    paddingHorizontal: scale(7),
    borderWidth: 0.5,
    borderColor: colors.blackOpacity25,
    maxWidth: '70%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageText: {
    fontSize: moderateScale(15),
    color: colors.black,
    fontWeight: '600',
    lineHeight: verticalScale(28),
    paddingHorizontal: scale(7),
  },
});
export default ChatMain;
