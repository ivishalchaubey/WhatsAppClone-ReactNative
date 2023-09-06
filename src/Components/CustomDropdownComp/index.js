import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Modal from 'react-native-modal';

const data = [
  {
    id: 1,
    title: 'New group',
    onPress: () => console.log('New group pressed'),
  },
  {
    id: 2,
    title: 'New broadcast',
    onPress: () => console.log('New broadcast pressed'),
  },
  {
    id: 3,
    title: 'Linked devices',
    onPress: () => console.log('Linked devices pressed'),
  },
  {
    id: 4,
    title: 'Starred messages',
    onPress: () => console.log('Starred messages pressed'),
  },
  {
    id: 5,
    title: 'Payments',
    onPress: () => console.log('Payments pressed'),
  },
  {
    id: 6,
    title: 'Settings',
    onPress: () => console.log('Settings pressed'),
  },
];

const CustomDropdownComp = ({isVisible, setIsVisible}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.model}
      onBackButtonPress={() => setIsVisible(false)} // Use setIsVisible to close the dropdown
      onBackdropPress={() => setIsVisible(false)}
      backdropOpacity={0}
      animationIn={'slideInDown'}>
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.button} onPress={item.onPress}>
                <Text style={styles.fontStyle}>{item.title}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.ListStyle}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  model: {
    justifyContent: 'flex-start',
  },
  parentContainer: {
    alignItems: 'flex-end',
  },
  container: {
    backgroundColor: colors.white,
    marginTop: verticalScale(27),
    width: scale(170),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10),
    elevation: 10,
  },
  fontStyle: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: colors.black,
  },
  button: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(5),
  },
  ListStyle: {
    gap: verticalScale(5),
  },
});

export default CustomDropdownComp;
