import React from 'react'
import { View, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../stacks'

const Tab = createMaterialTopTabNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

const TopTabNavigator = () => (
  <>
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {
        marginTop: Platform.select({
          ios: 50,
          android: 0,
        }),
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
    />
  </Tab.Navigator>
  </>
)

export default TopTabNavigator
