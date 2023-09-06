import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import navigationString from '../constants/navigationString';
import {Calls, Chat, Status} from '../pages';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import colors from '../style/colors';
import iconsPath from '../constants/iconsPath';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomDropdownComp from '../Components/CustomDropdownComp';

const CHAT_SCREEN = navigationString.CHAT_SCREEN;
const STATUS_SCREEN = navigationString.STATUS_SCREEN;
const CALL_SCREEN = navigationString.CALL_SCREEN;

const TopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();

  // Set the StatusBar styles
  StatusBar.setBackgroundColor(colors.theme);
  StatusBar.setBarStyle('light-content');

  // State for controlling the visibility of the dropdown
  const [isVisible, setIsVisible] = useState(false);

  // Helper function to render tab icons
  const renderTabIcon = icon => (
    <Image
      source={icon}
      style={{
        width: scale(22),
        height: verticalScale(22),
        tintColor: colors.white,
      }}
    />
  );

  // CustomTabBar component
  const CustomTabBar = ({state, navigation, descriptors, ...rest}) => {
    return (
      <View style={[styles.tabBarContainer]}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>WhatsApp</Text>
          <View style={styles.iconContainer}>
            {renderTabIcon(iconsPath.cameraIcon)}
            {renderTabIcon(iconsPath.searchIcon)}
            {/* Uncomment this line to show the menu icon */}
            {/* {renderTabIcon(iconsPath.menuIcon)} */}
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Image
                source={iconsPath.menuIcon}
                style={{
                  width: scale(22),
                  height: verticalScale(22),
                  tintColor: colors.white,
                }}
              />
            </TouchableOpacity>
            <CustomDropdownComp
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          </View>
        </View>
        <TabBar
          {...rest}
          indicatorStyle={{
            backgroundColor: colors.white,
          }}
          style={styles.tabBar}
          renderLabel={({route, focused}) => (
            <Text
              style={[
                styles.subtitle,
                {color: focused ? colors.white : colors.whiteOpacity70},
              ]}>
              {route.name}
            </Text>
          )}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={CHAT_SCREEN} component={Chat} />
      <Tab.Screen name={STATUS_SCREEN} component={Status} />
      <Tab.Screen name={CALL_SCREEN} component={Calls} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: colors.theme,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(12),
  },
  title: {
    fontSize: moderateScale(21),
    fontWeight: '600',
    lineHeight: 28,
    color: colors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(12),
  },
  tabBar: {
    backgroundColor: colors.theme,
    elevation: 0,
  },
  subtitle: {
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
});

export default TopTabNavigator;
